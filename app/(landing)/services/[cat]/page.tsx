import React from 'react';
import { ServiceCategories } from "@/constants";
import PageHeader from "@/components/PageHeader";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import ServicePost from "@/components/ServicePost";

const getCarouselImages = async (category: number) => {
    return prisma.carousels.findMany({
        where: { type: category }
    });
}

const ServiceCategory = async ({ params }: { params: { cat: string } }) => {
    const category = ServiceCategories.find(x => x.key === params.cat);
    if (!category) {
        return notFound();
    }

    const carousels = await getCarouselImages(category.id);
    console.log('carousels', carousels);

    const posts = await prisma.services.findMany({
        where: { type: category.id }
    });

    return (
        <>
            <PageHeader title={category.name} images={carousels?.map(c => c.image)} />
            <div className='max-container padding-container pb-20 pt-6'>
                {
                    (!posts || !posts.length) ?
                        <h1 className='text-center text-3xl py-10'>لا توجــد نتـائـج</h1> :
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-2'>
                            {
                                posts.map((post) => (
                                    <ServicePost rec={post} key={post.id} />
                                    /*<div className='border rounded p-3' key={idx}>
                                        {post.mediaUrl ? (
                                                MATCH_URL_YOUTUBE.test(post.mediaUrl) ?
                                                    <YTPlayer
                                                        url={post.mediaUrl}
                                                        title={post.title}
                                                    /> :
                                                    <Image
                                                        src={getImagePath(post.mediaUrl)}
                                                        alt={post.title}
                                                        width={560}
                                                        height={100}
                                                    />
                                            ) :
                                            <Image
                                                src={getImagePath(post.image)}
                                                alt={post.title}
                                                width={560}
                                                height={100}
                                            />
                                        }
                                        <p className='pt-4 text-xl text-center'>{post.title}</p>
                                        {
                                            post.description &&
                                            <p>{post.description}</p>
                                        }
                                    </div>*/
                                ))
                            }
                        </div>
                }
            </div>
        </>
    );
};

export default ServiceCategory;