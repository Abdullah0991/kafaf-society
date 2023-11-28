import React from 'react';
import { ACHIEVEMENTS, MATCH_URL_YOUTUBE } from "@/constants";
import Image from "next/image";
import YTPlayer from "@/components/YTPlayer";
import PageHeader from "@/components/PageHeader";

export async function generateStaticParams() {
    return Object.keys(ACHIEVEMENTS).map(key => ({ cat: key }));
}

const AchievementCategory = ({ params }: { params: { cat: string } }) => {
    const category = ACHIEVEMENTS[params.cat];
    const posts = category?.posts;

    return (
        <>
            <PageHeader title={category.title} images={category.carousel} />
            <div className='max-container padding-container pb-20 pt-6'>
                {
                    (!posts || !posts.length) ?
                        <h1 className='text-center text-3xl py-10'>لا توجــد نتـائـج</h1> :
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-2'>
                            {
                                posts.map((post, idx) => (
                                    <div className='border rounded p-3' key={idx}>
                                        {MATCH_URL_YOUTUBE.test(post.media) ?
                                            <YTPlayer
                                                url={post.media}
                                                title={post.title}
                                            /> :
                                            <Image src={post.media} alt={post.title} width={560} height={100} />}
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

export default AchievementCategory;