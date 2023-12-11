import prisma from "@/lib/prisma";
import { defaultHandler } from "ra-data-simple-prisma";
import { NextResponse } from "next/server";

const route = async (req: Request) => {
    const body = await req.json();

    switch (body.method) {
        default: {
            const result = await defaultHandler(body, prisma, {
                getList: {}
            });
            return NextResponse.json(result);
        }
    }
};

export { route as GET, route as POST };