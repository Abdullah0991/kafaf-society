import React from 'react';
// import { NEWS } from "@/constants";
import PageHeader from "@/components/PageHeader";
import prisma from "@/lib/prisma";
import { News } from ".prisma/client";
import NewsCard from "@/components/NewsCard";

const NewsPage = async () => {
    /*const news = await fetch('/api/news', {
        method: 'POST',
        body: JSON.stringify(
            {
                "method": "getList",
                "resource": "news",
                "params": {
                    "pagination": {
                        "page": 1,
                        "perPage": 10
                    },
                    "sort": {
                        "field": "createdAt",
                        "order": "DESC"
                    },
                    "filter": {}
                }
            }
        ),
        next: {
            revalidate: 60
        }
    });

    if (!news.ok) {
        return <div className='max-container padding-container py-28'>
            <h1 className='text-center text-4xl'>حدث خطأ في جلب النتائج</h1>
        </div>
    }

    const { data } = await news.json();*/
    const data = await prisma.news.findMany();

    /*if (isLoading) {
        return <div className='max-container padding-container py-28'>
            <h1 className='text-center text-4xl'>جاري جلب النتائج ...</h1>
        </div>
    }*/

    /*if (isLoadingError) {
        return <div className='max-container padding-container py-28'>
            <h1 className='text-center text-4xl'>حدث خطأ في جلب النتائج</h1>
        </div>
    }*/
    // const newsData = await news.json();
    // console.log('newsData', data);

    if (!data || !data.length) {
        return <div className='max-container padding-container py-28'>
            <h1 className='text-center text-4xl'>لا توجــد نتـائـج</h1>
        </div>
    }

    return (
        <>
            <PageHeader title='آخر الأخبار' noCarousel />
            <div className='max-container padding-container py-10 flex flex-col justify-center gap-5'>
                {/*<ol>*/}
                {
                    data.map((entry: News) => (
                        <NewsCard {...entry} key={entry.id} />
                        /*<li className='border-r-2 border-emerald-400' key={entry.id}>
                            <div className="md:flex justify-start min-h-[200px] relative">
                                <div
                                    className="bg-green-600 w-6 h-6 flex items-center justify-center rounded-full -mr-3 absolute">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                         className="text-white w-3 h-3" role="img"
                                         xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 448 512">
                                        <path fill="currentColor"
                                              d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                                    </svg>
                                </div>
                                <div
                                    className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md md:w-full mr-6 mb-10">
                                    <div
                                        className="flex flex-col sm:flex-row justify-between mb-4 gap-1.5 md:gap-4">
                                    <span className="font-medium text-emerald-600 text-sm">
                                        {entry.title}
                                    </span>
                                        <span className="font-medium text-gray-400 text-sm">
                                        {(typeof entry.date === 'string' ? new Date(entry.date) : entry.date).toLocaleDateString()}
                                    </span>
                                    </div>
                                    <p className="text-gray-700 mb-2">
                                        {entry.description}
                                    </p>
                                </div>
                            </div>
                        </li>*/
                    ))
                }
                {/*</ol>*/}
            </div>
        </>
    );
};

export default NewsPage;