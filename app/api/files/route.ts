import { NextRequest, NextResponse } from "next/server";
import { existsSync, readFileSync } from 'fs';
import { resolve } from "path";

export const GET = async (req: NextRequest) => {
    const fileName = req.nextUrl.searchParams.get('n');
    if (!fileName) {
        return new NextResponse(null, { status: 404 });
    }
    const filePath = resolve('.', 'upload', fileName)
    if (existsSync(`./upload/${fileName}`)) {
        const imageBuffer = readFileSync(filePath);
        const response = new NextResponse(imageBuffer)
        response.headers.set('content-type', 'image/png');
        return response;
    }
    return new NextResponse(null, { status: 404 });
}