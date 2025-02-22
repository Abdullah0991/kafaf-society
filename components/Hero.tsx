import React from 'react';
import { APP_TITLE, HERO_SUB_TITLE, STATS } from "@/constants";
import YTPlayer from "@/components/YTPlayer";
import prisma from "@/lib/prisma";
import { Statistics } from ".prisma/client";
import { numFormatter } from "@/lib/helpers";
import Quote from "@/components/Quote";

const promoVideoUrl = process.env.NEXT_PUBLIC_PROMO_URL;

const Hero = async () => {
    const stats = await prisma.statistics.findFirst({
            orderBy: { createdAt: 'desc' }
        }) ||
        {
            emergency: 0,
            medical: 0,
            clothes: 0,
            food: 0,
            logistic: 0,
            activity: 0,
            education: 0,
        } as Statistics;

    const total = stats.activity + stats.medical + stats.emergency + stats.clothes + stats.food + stats.logistic + stats.education;

    return (
        <>
            <section className='max-container padding-container min-h-[calc(100dvh-80px)]'>
                <div className='hero-map' />
                <div className='flex py-8 md:py-10'>
                    <h1 className='w-full font-bold text-3xl lg:text-6xl text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                        {APP_TITLE}
                    </h1>
                </div>
                <div className='hero-counter'>
                    <div className='flex flex-col gap-5 items-center'>
                        <p className='text-white text-2xl lg:text-3xl whitespace-nowrap'>
                            عدد المستفيدين الكلي
                        </p>
                        <p className='text-green-800 text-4xl lg:text-5xl'>{numFormatter(total)}</p>
                    </div>
                </div>
                <div className='relative flex flex-wrap gap-5 mt-10 xl:mt-20'>
                    {
                        STATS.map((st) => (
                            <InfoCard label={st.name} value={Number(stats[st.key as keyof Statistics])} key={st.key} />
                        ))
                    }
                </div>
            </section>
            <section
                className='max-container bg-neutral-100 flex flex-col lg:flex-row items-center lg:items-end gap-20 px-6 lg:px-20 my-20 py-10'>
                <Quote title="من نحن:" description={HERO_SUB_TITLE} />
                <div className='w-full md:w-[560px]'>
                    <YTPlayer url={promoVideoUrl ?? ''} title={'Promo'} />
                </div>
            </section>
        </>
    );
};

const InfoCard = ({ label, value }: { label: string, value: number }) => {
    return (
        <div className='relative flex-col rounded-3xl border-4 border-dashed flex-1 p-4'>
            <div className='flex flex-row md:flex-col gap-5 justify-between items-center h-full'>
                <p className='text-3xl lg:text-4xl text-center flex-1'>{numFormatter(value)}</p>
                <p className='text-gray-400 text-xl text-center flex-1'>{label}</p>
            </div>
        </div>
    )
}

export default Hero;
