import React from 'react';
import Image from "next/image";
import ProgressBar from "@/components/ProgressBar";
import CircularProgressBar from "@/components/CircularProgressBar";

type CaseDisplayProps = {
    media: string;
    total: number;
    gathered: number
    description: string;
}

const CaseDisplay = ({ media, description, total, gathered }: CaseDisplayProps) => {
    return (
        <>
            <div className='relative w-full min-h-[200px] md:min-h-[500px]'>
                <Image src={media} alt={'case'} fill objectFit='contain' />
            </div>
            <div
                className='flex flex-col md:flex-row-reverse gap-6 md:gap-20 py-6 px-6 md:px-10 mt-2 border-2 border-dashed rounded-2xl'>
                <ProgressBar label={'التقدم'} max={total} current={gathered} className='md:hidden' />
                <CircularProgressBar max={total} current={gathered} className='hidden md:flex' />
                <div className='flex flex-col items-center gap-5'>
                    <p>
                        <span className='text-xl md:text-3xl text-gray-30'>المبلغ المجموع: </span>
                        <span className='text-xl md:text-3xl text-emerald-600 font-bold'>{gathered} $</span>
                    </p>
                    <p className='text-xl md:text-2xl text-center md:text-start'>{description}</p>
                </div>
            </div>
        </>
    )
}

export default CaseDisplay;