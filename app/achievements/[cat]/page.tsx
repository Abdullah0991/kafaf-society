import React from 'react';
import { ACHIEVEMENTS, MATCH_URL_YOUTUBE } from "@/constants";
import Image from "next/image";
import YTPlayer from "@/components/YTPlayer";

const Page = ({ params }: { params: { cat: string } }) => {
    const posts = ACHIEVEMENTS[params.cat];

    if (!posts || !posts.length) {
        return <div className='max-container padding-container py-28'>
            <h1 className='text-center text-4xl'>لا توجــد نتـائـج</h1>
        </div>
    }

    return (
        <div className='max-container padding-container py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                posts.map((post) => (
                    <div className='border rounded p-3'>
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
    );
};

export default Page;