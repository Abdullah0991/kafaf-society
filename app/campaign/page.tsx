import React from 'react';
import { CAMPAIGNS, MATCH_URL_YOUTUBE } from "@/constants";
import YTPlayer from "@/components/YTPlayer";
import Image from "next/image";
import Link from "next/link";

const Campaign = () => {
    if (!CAMPAIGNS || !CAMPAIGNS.length) {
        return <div className='max-container padding-container py-28'>
            <h1 className='text-center text-4xl'>لا توجــد نتـائـج</h1>
        </div>
    }

    return (
        <div className='max-container padding-container py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                CAMPAIGNS.map((camp) => (
                    <div className='border rounded p-3'>
                        {MATCH_URL_YOUTUBE.test(camp.media) ?
                            <YTPlayer
                                url={camp.media}
                                title={camp.title}
                            /> :
                            <Image src={camp.media} alt={camp.title} width={560} height={100} />}
                        <Link href={`/campaign/${camp.id}`}><p className='pt-4 text-xl text-center'>{camp.title}</p></Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Campaign;