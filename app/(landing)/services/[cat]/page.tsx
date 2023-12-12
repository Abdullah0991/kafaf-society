import React from 'react';
import { MATCH_URL_YOUTUBE, ServiceCategories } from "@/constants";
import Image from "next/image";
import YTPlayer from "@/components/YTPlayer";
import PageHeader from "@/components/PageHeader";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { getImagePath } from "@/lib/helpers";

/*export async function generateStaticParams() {
    return Object.keys(ACHIEVEMENTS).map(key => ({ cat: key }));
}*/

const ServiceCategory = async ({ params }: { params: { cat: string } }) => {
    const category = ServiceCategories.find(x => x.key === params.cat);
    if (!category) {
        return notFound();
    }

    const posts = await prisma.services.findMany({
        where: { type: category.id }
    });

    return (
        <>
            <PageHeader title={category.name} images={category.carousel} />
            <div className='max-container padding-container pb-20 pt-6'>
                {
                    (!posts || !posts.length) ?
                        <h1 className='text-center text-3xl py-10'>لا توجــد نتـائـج</h1> :
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-2'>
                            {
                                posts.map((post, idx) => (
                                    <div className='border rounded p-3' key={idx}>
                                        {MATCH_URL_YOUTUBE.test(post.mediaUrl) ?
                                            <YTPlayer
                                                url={post.mediaUrl}
                                                title={post.title}
                                            /> :
                                            <Image
                                                src={getImagePath(post.mediaUrl)}
                                                alt={post.title}
                                                width={560}
                                                height={100}
                                            />}
                                        <p className='pt-4 text-xl text-center'>{post.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                }
            </div>
        </>
    );
};

export default ServiceCategory;