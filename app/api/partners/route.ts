import prisma from "@/lib/prisma";
import { createHandler, defaultHandler, deleteHandler, deleteManyHandler, updateHandler } from "ra-data-simple-prisma";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { removeFile, uploadFile } from "@/lib/file-uploader";
import { Prisma } from "@prisma/client";

const route = async (req: Request) => {
    const body = await req.json();

    switch (body.method) {
        case "create": {
            const image = body.params.data.image;
            if (image && typeof image === 'object' && 'src' in image) {
                let base64Image = image.src.split(';base64,').pop();
                body.params.data.image = await uploadFile(image.title, base64Image);
            }

            const result = await createHandler<Prisma.PartnersCreateArgs>(
                body,
                prisma.partners
            );

            revalidatePath('/');

            return NextResponse.json(result);
        }
        case "update": {
            const image = body.params.data.image;
            if (image && typeof image === 'object' && 'src' in image) {
                let base64Image = image.src.split(';base64,').pop();
                body.params.data.image = await uploadFile(image.title, base64Image);
            }

            // Check for old image if it needs to remove
            if (body.params.previousData?.image && body.params.previousData?.image !== image) {
                await removeFile(body.params.previousData?.image);
            }

            const result = await updateHandler<Prisma.PartnersUpdateArgs>(
                body,
                prisma.partners,
                {
                    allowNestedUpsert: {
                        settings: true,
                    },
                });

            revalidatePath('/');

            return NextResponse.json(result);
        }
        case "delete": {
            const image = body.params.previousData.image;
            if (image) {
                await removeFile(image);
            }

            const result = await deleteHandler<Prisma.PartnersDeleteArgs>(body, prisma.partners);

            revalidatePath('/');

            return NextResponse.json(result);
        }
        case "deleteMany": {
            const { ids } = body.params;
            const images = await prisma.partners.findMany({
                where: { id: { in: ids } },
                select: { image: true }
            });

            if (images && images.length) {
                for (let i = 0; i < images.length; i++) {
                    if (images[i].image) {
                        await removeFile(images[i].image!);
                    }
                }
            }

            const result = await deleteManyHandler(body, prisma.partners);

            revalidatePath('/');

            return NextResponse.json(result);
        }
        default: {
            const result = await defaultHandler(body, prisma);
            return NextResponse.json(result);
        }
    }
};

export { route as GET, route as POST };
