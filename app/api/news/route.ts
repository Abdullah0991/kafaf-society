import { createHandler, defaultHandler, } from "ra-data-simple-prisma";

import { prisma } from '@/lib/prisma';
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import fs from 'fs';

const route = async (req: Request) => {
    const body = await req.json();

    switch (body.method) {
        /*case "getList":{
            const result = await getListHandler<Prisma.NewsFindManyArgs>(
                body as GetListRequest,
                prisma.news,
            );
            return NextResponse.json(result);
        }*/

        case "create": {
            console.log('body', body);
            const image = body.params.data.image;
            if (image && typeof image === 'object' && 'src' in image) {
                let base64Image = image.src.split(';base64,').pop();
                try {
                    if (!fs.existsSync('./upload')) {
                        fs.mkdirSync('./upload');
                    }
                    fs.writeFileSync(`./upload/${image.title}`, base64Image!, { encoding: 'base64' });
                    body.params.data.image = `${image.title}`;
                } catch (e) {
                    console.error('store file error', e);
                    return NextResponse.error();
                }
            }
            const result = await createHandler<Prisma.NewsCreateArgs>(
                body,
                prisma.news
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