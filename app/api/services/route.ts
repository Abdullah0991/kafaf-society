import prisma from "@/lib/prisma";
import { defaultHandler } from "ra-data-simple-prisma";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const route = async (req: Request) => {
    const body = await req.json();

    switch (body.method) {
        default: {
            const result = await defaultHandler(body, prisma);

            if (body.method === 'create' ||
                body.method === 'update' ||
                body.method === 'delete' ||
                body.method === 'deleteMany') {
                revalidatePath('/services');
            }

            return NextResponse.json(result);
        }
    }
};

export { route as GET, route as POST };