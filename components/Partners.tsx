import React from 'react';
import Image from "next/image";
import prisma from "@/lib/prisma";
import { getImagePath } from "@/lib/helpers";

const Partners = async () => {
    const partners = await prisma.partners.findMany({
        orderBy: { createdAt: 'asc' },
        where: { visible: true }
    });

    if (!partners || !partners.length) {
        return null;
    }

    return (
        <section className='max-container padding-container w-full py-16'>
            <h1 className='font-bold text-4xl lg:text-5xl text-center'>شركاؤنا 🤝</h1>
            <ul className='mt-10 grid gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-5 md:mt-14 xl:mt-16 xl:gap-10'>
                {
                    (partners ?? []).map((p, i) =>
                        <li key={i} className='flex justify-center h-[96px] relative'>
                            <Image src={getImagePath(p.image)} alt={p.name ?? 'partner'} fill objectFit='contain' />
                        </li>
                    )
                }
            </ul>
        </section>
    );
};

export default Partners;
