import React from 'react';
import Image from "next/image";
import BackButton from "@/components/BackButton";
import prisma from "@/lib/prisma";
import ProgressBar from "@/components/ProgressBar";

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
        <article className='max-container padding-container py-20'>
            <div className='relative w-full h-[300px] border'>
                <BackButton className='absolute -top-9' />
                <Image
                    src={campaign.image ? `/api/files?n=${campaign.image}` : '/no_image.png'}
                    alt={campaign.title}
                    fill objectFit={'contain'}
                />
            </div>
            <h1 className='text-2xl md:text-3xl mt-10 mb-4 px-4 py-2 border-r-4 bg-gray-10'>{campaign.title}:</h1>
            <ProgressBar max={campaign.target} current={campaign.cash} label='تقدم الحملة' className='mb-6' />
            <p className='text-lg px-4 py-4 mb-10 whitespace-break-spaces border rounded-md min-h-[200px]'>
                {campaign.description}
            </p>
        </article>
    );
};

export default CampaignDetails;