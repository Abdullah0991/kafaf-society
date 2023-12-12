import { createHandler, defaultHandler, deleteHandler, updateHandler } from "ra-data-simple-prisma";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { removeFile, uploadFile } from "@/lib/file-uploader";
import prisma from "@/lib/prisma";

const route = async (req: Request) => {
    const body = await req.json();

    switch (body.method) {
        case "create": {
            const image = body.params.data.image;
            if (image && typeof image === 'object' && 'src' in image) {
                let base64Image = image.src.split(';base64,').pop();
                body.params.data.image = await uploadFile(image.title, base64Image);
            }
            const result = await createHandler<Prisma.CampaignsCreateArgs>(
                body,
                prisma.campaigns
            );
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

            const result = await updateHandler<Prisma.CampaignsUpdateArgs>(
                body,
                prisma.campaigns,
                {
                    allowNestedUpsert: {
                        settings: true,
                    },
                });
            return NextResponse.json(result);
        }
        case "delete": {
            const image = body.params.previousData.image;
            if (image) {
                await removeFile(image);
            }
            const result = await deleteHandler<Prisma.CampaignsDeleteArgs>(body, prisma.campaigns);
            return NextResponse.json(result);
        }
        default: {
            const result = await defaultHandler(body, prisma, {
                getList: {}
            });
            return NextResponse.json(result);
        }
    }
};

export { route as GET, route as POST };