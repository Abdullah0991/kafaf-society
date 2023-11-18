import React from 'react';
import Image from "next/image";
import BackButton from "@/components/BackButton";
import { CAMPAIGNS } from "@/constants";

const CampaignDetails = ({ params }: { params: { id: string } }) => {
    const campaign = CAMPAIGNS.find(x => x.id === params.id);

    if (!campaign) {
        return <div className='max-container padding-container py-28'>
            <h1 className='text-center text-4xl'>لا توجــد نتـائـج</h1>
        </div>;
    }

    return (
        <div className='max-container padding-container py-20'>
            <div className='relative w-full h-[300px] border'>
                <BackButton className='absolute -top-9' />
                <Image src={campaign.media} alt={campaign.title} fill objectFit={'contain'} />
            </div>
            <h1 className='text-2xl md:text-3xl my-10 px-4 py-2 border-r-4 bg-gray-10'>{campaign.title}:</h1>
            <p className='text-lg px-4 py-4 mb-10 whitespace-break-spaces'>
                {campaign.content}
            </p>
        </div>
    );
};

export default CampaignDetails;