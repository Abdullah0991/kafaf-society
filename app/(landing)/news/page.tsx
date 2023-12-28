import React from 'react';
import PageHeader from "@/components/PageHeader";
import prisma from "@/lib/prisma";
import { News } from ".prisma/client";
import NewsCard from "@/components/NewsCard";

const getNews = async () => {
    return prisma.news.findMany({
        orderBy: { date: 'desc' }
    });
}

const NewsPage = async () => {
    const data = await getNews();

    if (!data || !data.length) {
        return <div className='max-container padding-container py-28'>
            <h1 className='text-center text-4xl'>لا توجــد نتـائـج</h1>
        </div>
    }

    return (
        <>
            <PageHeader title='آخر الأخبار' noCarousel />
            <div className='max-container padding-container py-10 flex flex-col justify-center gap-5'>
                {
                    data.map((entry: News) => (
                        <NewsCard {...entry} key={entry.id} />
                    ))
                }
            </div>
        </>
    );
};

export default NewsPage;