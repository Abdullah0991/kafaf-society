import React from 'react';
import Image from "next/image";
import BackButton from "@/components/BackButton";
import prisma from "@/lib/prisma";
import ProgressBar from "@/components/ProgressBar";
import { getImagePath } from "@/lib/helpers";
import YTPlayer from "@/components/YTPlayer";
import DonateButton from "@/components/DonateButton";

/*export async function generateStaticParams() {
    return CAMPAIGNS.map((c) => ({ id: c.id }));
}*/

const CampaignDetails = async ({ params }: { params: { id: string } }) => {
    // const campaign = CAMPAIGNS.find(x => x.id === params.id);
    const campaign = await prisma.campaigns.findUnique({ where: { id: params.id } });

    if (!campaign) {
        return <div className='max-container padding-container py-28'>
            <h1 className='text-center text-4xl'>لا توجــد نتـائـج</h1>
        </div>;
    }

    return (
        <article className='max-container padding-container py-10 md:py-16'>
            <div className='relative w-full h-[200px] md:h-[300px] border rounded-md'>
                <BackButton className='absolute -top-9' />
                <Image
                    src={getImagePath(campaign.image)}
                    alt={campaign.title}
                    fill objectFit={'contain'}
                />
            </div>
            <h1 className='text-xl md:text-2xl mt-10 mb-4 px-4 py-2 border-r-4 bg-gray-10'>{campaign.title}:</h1>
            <div className='flex flex-col-reverse md:flex-row items-end mb-6 gap-5'>
                <div className='w-full flex-1'>
                    <DonateButton className='w-full md:w-1/2' />
                </div>
                <ProgressBar max={campaign.target} current={campaign.cash} label='تقدم الحملة' className='flex-1' />
            </div>
            <div
                className='flex flex-col md:flex-row px-4 py-4 md:mb-10 border rounded-md min-h-[200px] gap-8 md:gap-4'>
                <p className='text-lg whitespace-break-spaces flex-1'>
                    {campaign.description}
                </p>
                {campaign.mediaUrl &&
                    <div className='flex-1'>
                        <YTPlayer url={campaign.mediaUrl} title={campaign.title} />
                    </div>
                }
            </div>
        </article>
    );
};

export default CampaignDetails;