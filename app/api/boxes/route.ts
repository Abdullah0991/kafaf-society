import { defaultHandler } from "ra-data-simple-prisma";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const route = async (req: Request) => {
    const body = await req.json();

    switch (body.method) {

        default: {
            const result = await defaultHandler(body, prisma);

            if (body.method === 'create' ||
                body.method === 'update' ||
                body.method === 'delete' ||
                body.method === 'deleteMany') {

                revalidatePath('/box');
            }

            return NextResponse.json(result);
        }
    }
};

export { route as GET, route as POST };