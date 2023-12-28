import Image from "next/image";
import Link from "next/link";
import YTPlayer from "@/components/YTPlayer";
import { MATCH_URL_YOUTUBE } from "@/constants";
import PageHeader from "@/components/PageHeader";
import prisma from "@/lib/prisma";
import type { Campaigns } from ".prisma/client";
import { getImagePath } from "@/lib/helpers";

const Campaigns = async () => {
    const data = await prisma.campaigns.findMany({
        orderBy: { createdAt: 'desc' }
    });
    console.log(data);

    return (
        <>
            <PageHeader title='الحملات' noCarousel />
            <div className='max-container padding-container pb-20 pt-6'>
                {
                    (!data || !data.length) ?
                        <h1 className='text-center text-3xl py-10'>لا توجــد نتـائـج</h1> :
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-2'>
                            {
                                data.map((camp: Campaigns) => (
                                    <div key={camp.id}
                                         className='border rounded p-3 flex flex-col justify-between min-h-[300px]'>
                                        <div className='relative w-full h-full'>
                                            {camp.image && MATCH_URL_YOUTUBE.test(camp.image) ?
                                                <YTPlayer
                                                    url={camp.image}
                                                    title={camp.title}
                                                /> :
                                                <Image
                                                    src={getImagePath(camp.image)}
                                                    alt={camp.title}
                                                    fill
                                                    objectFit='cover'
                                                />}
                                        </div>
                                        <Link href={`/campaigns/${camp.id}`}>
                                            <p className='pt-4 text-xl text-center'>{camp.title}</p>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                }
            </div>
        </>
    );
};

export default Campaigns;