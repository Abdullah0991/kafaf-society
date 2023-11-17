import React from 'react';
import { APP_TITLE, HERO_SUB_TITLE } from "@/constants";
import Image from "next/image";

const Hero = () => {
    return (
        <>
            <section className='max-container padding-container min-h-[calc(100dvh-80px)]'>
                {/*<div className='hero-map' />*/}
                <div className='flex flex-col gap-20 pt-8 md:py-10 xl:flex-row'>
                    <div className='relative flex flex-1 flex-col xl:w-1/2 gap-10'>
                        <h1 className='font-bold text-3xl lg:text-6xl lg:text-start text-center'>{APP_TITLE}</h1>
                        <div
                            className='relative rounded-3xl shadow-2xl px-6 py-6 xl:mt-[32px] bg-gradient-to-b from-emerald-500 to-lime-400'>
                            <div className='flex flex-col gap-5 items-center'>
                                <p className='text-white text-2xl lg:text-3xl whitespace-nowrap'>
                                    عدد المستفيدين الكلي
                                </p>
                                <p className='text-green-800 text-4xl lg:text-5xl'>{405000}</p>
                            </div>
                        </div>
                    </div>
                    <div className='hidden xl:block'>
                        <Image src='/app_logo.png' alt='services' width={360} height={440} />
                    </div>
                </div>
                <div className='relative grid md:grid-cols-5 gap-5 mt-12 xl:mt-0'>
                    <InfoCard label='حالة طبية' value='4000' />
                    <InfoCard label='طالب' value='10000' />
                    <InfoCard label='حملة' value='36' />
                    <InfoCard label='حالة إنسانية' value='48' />
                    <InfoCard label='صالة الالبسة' value='8980' />
                </div>
            </section>
            <section className='max-container px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:items-end gap-20 my-20 bg-neutral-100 py-10'>
                <div className='relative flex flex-1 flex-col xl:w-1/2'>
                    <h1 className='font-bold text-4xl lg:text-5xl lg:text-start text-center'>من نحن:</h1>
                    {/*<p className=' text-gray-600 xl:max-w-[750px] md:font-bosld'>{HERO_SUB_TITLE}</p>*/}
                    <blockquote className="relative mt-6 p-4 text-xl italic border-r-4 lg:border-0 text-neutral-600 quote">
                        <div className="stylistic-quote-mark top-0 right-[100%] mr-2" aria-hidden="true">
                            &ldquo;
                        </div>
                        <p className='mb-4 text-center'>{HERO_SUB_TITLE}</p>
                        <div className="stylistic-quote-mark bottom-0 left-[100%] rotate-180 ml-3" aria-hidden="true">
                            &ldquo;
                        </div>
                    </blockquote>
                </div>
                <iframe
                    className='w-full md:w-[560px]'
                    width="auto"
                    height="315"
                    src="https://www.youtube.com/embed/2V5DNwmvS2U?si=Qs-xHPrmyQ6Ygg_G"
                    title="YouTube video player"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                >
                </iframe>
            </section>
        </>
    );
};

const InfoCard = ({ label, value }: { label: string, value: string }) => {
    return (
        <div className='relative flex-col rounded-3xl border-4 border-dashed flex-1 p-4 md:p-6'>
            <div className='flex flex-row md:flex-col gap-5 justify-between md:items-center'>
                <p className='text-3xl lg:text-4xl text-center flex-1'>{value}</p>
                <p className='text-gray-400 text-2xl lg:text-2xl text-center whitespace-nowrap flex-1'>{label}</p>
            </div>
        </div>
    )
}

export default Hero;