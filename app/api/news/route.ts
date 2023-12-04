import { defaultHandler, getListHandler, GetListRequest, } from "ra-data-simple-prisma";

import { prisma } from '@/lib/prisma';
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

const route = async (req: Request) => {
    const body = await req.json();

    switch (body.method) {
        case "getList":{
            const result = await getListHandler<Prisma.NewsFindManyArgs>(
                body as GetListRequest,
                prisma.news,
            );
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
export const dynamic = "force-static";
