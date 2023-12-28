import React from 'react';
import Image from "next/image";
import { getImagePath } from "@/lib/helpers";
import { Services } from "@prisma/client";
import { MATCH_URL_YOUTUBE } from "@/constants";
import YTPlayer from "@/components/YTPlayer";

type Props = { rec: Services };

const ServicePost = ({ rec }: Props) => {
    return (
        <div className='border rounded-2xl shadow'>
            {
                rec ?
                    <div>
                        <div className='relative w-full min-h-[200px] md:min-h-[225px]'>
                            {/*<Image src={getImagePath(rec.image)} alt={'case'} fill objectFit='cover'
                                   className='rounded-tl-2xl rounded-tr-2xl' />*/}
                            {rec.mediaUrl ? (
                                    MATCH_URL_YOUTUBE.test(rec.mediaUrl) ?
                                        <YTPlayer
                                            url={rec.mediaUrl}
                                            title={rec.title}
                                            className='rounded-tl-2xl rounded-tr-2xl'
                                        /> :
                                        <Image
                                            src={getImagePath(rec.mediaUrl)}
                                            alt={rec.title}
                                            fill objectFit='cover'
                                            className='rounded-tl-2xl rounded-tr-2xl'
                                        />
                                ) :
                                <Image
                                    src={getImagePath(rec.image)}
                                    alt={rec.title}
                                    fill objectFit='cover'
                                    className='rounded-tl-2xl rounded-tr-2xl'
                                />
                            }
                        </div>
                        <div className='flex flex-col gap-6 py-6 px-6 max-h-[160px]'>
                            <article className='flex flex-col items-center justify-between flex-grow'>
                                <p className='text-lg text-center font-bold'>{rec.title}</p>
                                {rec.description &&
                                    <p className='text-md text-center text-gray-30 line-clamp-3'>
                                        {rec.description}
                                    </p>
                                }
                            </article>
                        </div>
                    </div> :
                    <div className='max-container padding-container py-20'>
                        <h1 className='text-center text-3xl'>لا توجــد معلومات عن الحالة</h1>
                    </div>
            }
        </div>
    );
};

export default ServicePost;