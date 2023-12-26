import React from 'react';
import Image from "next/image";
import ProgressBar from "@/components/ProgressBar";
import CircularProgressBar from "@/components/CircularProgressBar";
import { currFormatter, getImagePath } from "@/lib/helpers";
import prisma from "@/lib/prisma";
import Button from "@/components/Button";

type CaseDisplayProps = {
    latest?: boolean;
    id?: string;
    showDonateButton?: boolean;
}

const getLatestCase = async () => {
    return prisma.tasks.findFirst({
        orderBy: { createdAt: 'desc' },
        where: { cash: { lt: prisma.tasks.fields.target } }
    });
}

const getCaseById = async (id: string) => {
    return prisma.tasks.findUnique({
        where: { id }
    });
}

const CaseDisplay = async ({ id, latest = false, showDonateButton = true }: CaseDisplayProps) => {
    let rec;
    if (latest) {
        rec = await getLatestCase();
    } else if (id) {
        rec = await getCaseById(id);
    }

    return (
        <div className='border-2 border-dashed rounded-2xl pt-1 px-1'>
            {
                rec ?
                    <>
                        <div className='relative w-full min-h-[200px] md:min-h-[500px] rounded-2xl'>
                            <Image src={getImagePath(rec.image)} alt={'case'} fill objectFit='contain' />
                        </div>
                        <div className='flex flex-col md:flex-row-reverse gap-6 md:gap-20 py-6 px-6 md:px-10'>
                            <ProgressBar label={'التقدم'} max={rec.target} current={rec.cash} className='md:hidden' />
                            <CircularProgressBar max={rec.target} current={rec.cash} className='hidden md:flex' />
                            <article className='flex flex-col items-center gap-5'>
                                <p className='flex gap-2'>
                                    <span className='text-xl md:text-3xl text-gray-30'>المبلغ المجموع:</span>
                                    <span className='text-xl md:text-3xl text-emerald-600 font-bold'>
                                        {currFormatter(rec.cash)}
                                    </span>
                                </p>
                                <p className='text-xl md:text-2xl text-center md:text-start'>
                                    {rec.description}
                                </p>
                                {
                                    showDonateButton &&
                                    <Button
                                        label='تبرع'
                                        className='mt-2 w-full p-4 bg-emerald-500 text-white cursor-pointer'
                                    />
                                }
                            </article>
                        </div>
                    </> :
                    <div className='max-container padding-container py-20'>
                        <h1 className='text-center text-3xl'>لا توجــد معلومات عن الحالة</h1>
                    </div>
            }
        </div>
    )
}

export default CaseDisplay;