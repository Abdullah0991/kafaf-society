import { defaultHandler } from "ra-data-simple-prisma";
import { prisma } from "@/lib/prisma"; // <= Your prisma client instance
import { NextResponse } from "next/server";

export function generateStaticParams() {
    return ['news', 'campaigns', 'files', 'statistics', 'services'].map((x) => ({ resource: x }));
}

const handler = async (req: Request) => {
    const body = await req.json();
    const result = await defaultHandler(body, prisma);
    return NextResponse.json(result);
};

export { handler as GET, handler as POST };
