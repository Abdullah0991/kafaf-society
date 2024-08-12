import React from 'react';
import BackButton from "@/components/BackButton";
import Image from "next/image";
import { getImagePath } from "@/lib/helpers";
import prisma from "@/lib/prisma";
import type { Metadata, ResolvingMetadata } from "next";
import { APP_TITLE } from "@/constants";

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

const getNewsById = async (id: number) => {
    return prisma.news.findUnique({ where: { id } });
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // fetch data
    const news = await getNewsById(+params.id);

    if (!news) {
        return {}
    }

    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_APP_DOMAIN || 'http://localhost:3000'),
        title: `${news.title} - ${APP_TITLE}`,
        description: news.description,
        openGraph: {
            title: news.title,
            description: news.description,
            locale: 'ar-SY',
            type: "article",
            images: {
                url: getImagePath(news.image),
                alt: news.title
            }
        }
    }
}

const NewsDetailsPage = async ({ params }: { params: { id: string } }) => {
    const news = await getNewsById(+params.id);

    if (!news) {
        return <div className='max-container padding-container py-28'>
            <h1 className='text-center text-4xl'>لا توجــد نتـائـج</h1>
        </div>;
    }

    return (
        <article className='max-container padding-container py-10 md:py-16'>
            <div className='relative w-full h-[200px] md:h-[300px] border rounded-md'>
                <BackButton className='absolute -top-9' />
                <Image
                    src={getImagePath(news.image)}
                    alt={news.title}
                    fill
                    className='rounded-md object-fill md:object-contain'
                />
            </div>
            <h1 className='text-xl md:text-2xl mt-5 md:mt-10 mb-4 px-4 py-2 border-r-4 bg-gray-10'>
                {news.title}:
            </h1>
            <div
                className='flex flex-col md:flex-row px-4 py-4 md:mb-10 border rounded-md min-h-[200px] gap-8 md:gap-4'>
                <p className='text-lg whitespace-break-spaces flex-1'>
                    {news.description}
                </p>
                {/*{news.mediaUrl &&
                    <div className='flex-1'>
                        <YTPlayer url={news.mediaUrl} title={news.title} />
                    </div>
                }*/}
            </div>
        </article>
    );
};

export default NewsDetailsPage;
