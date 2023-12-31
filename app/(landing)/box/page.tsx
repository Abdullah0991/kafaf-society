import React from 'react';
import CaseDisplay from "@/components/CaseDisplay";
import { currFormatter } from "@/lib/helpers";
import { BOX_DESC, TaskCategories } from "@/constants";
import Link from "next/link";
import { getLatestCase } from "@/lib/tasks-api";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Quote from "@/components/Quote";

const getBoxesTotal = async () => {
    return prisma.boxes.aggregate({
        _sum: {
            cash: true
        }
    });
}

const getActiveBoxes = async () => {
    return prisma.boxes.findMany({
        where: { isActive: true }
    });
}

const Box = async () => {
    const latestCases = await Promise.all(TaskCategories.map(cat => getLatestCase(cat.id)));
    const activeBoxes = await getActiveBoxes();
    const { _sum } = await getBoxesTotal();

    return (
        <>
            <section className='max-container padding-container'>
                <div className='py-6 md:py-10 flex flex-col md:flex-row gap-6 md:gap-12'>
                    <div className='md:min-w-[520px] flex-col space-y-6'>
                        <div className='relative min-h-[160px] md:min-h-[200px] md:flex-grow'>
                            <Image src={'/box_dark.png'} alt={'box_logo'} fill objectFit='cover' />
                        </div>
                        <div className='flex-grow'>
                            {/*<h1 className='text-3xl md:text-5xl text-center md:text-start'>صندوق المستقبل بأيدينا</h1>*/}
                            <div className='flex flex-col gap-5 justify-center items-center'>
                                <div className='flex flex-col md:flex-row gap-3 items-center'>
                                    <h2 className='text-3xl'>إجمالي تبرعاتكم:</h2>
                                    <span className='text-4xl text-green-600'>{currFormatter(_sum.cash ?? 0)}</span>
                                </div>
                                <div className='flex gap-3'>
                                    <span>آخر تحديث:</span>
                                    <span className='text-gray-30'>{new Date().toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:flex flex-1 items-center px-14'>
                        <Quote description={BOX_DESC} title={''} />
                    </div>
                </div>
                <div className='border bg-gray-20 mb-6' />
                {!!(activeBoxes && activeBoxes.length) &&
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mb-20'>
                        {
                            activeBoxes?.map(box => (
                                <BoxCounter label={box.name} value1={box.cash} key={box.id} />
                            ))
                        }
                    </div>
                }

                {/*<a
                    href={'#case'}
                    className='flex justify-center gap-3 rounded-full border mt-10 w-full p-4 bg-emerald-700 text-white cursor-pointer'>
                    هل تريد المساعدة؟
                </a>*/}
            </section>
            <section id='case' className='max-container padding-container flex flex-col items-center gap-5 mt-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
                    {
                        latestCases?.filter(x => !!x).map((rec) => (
                            <CaseDisplay key={rec!.id} rec={rec!} />
                        )).filter(x => !!x)
                    }
                </div>
                <Link
                    href='/cases'
                    className='flex justify-center gap-3 rounded-full border mt-2 w-full p-4 bg-gray-500 text-white cursor-pointer'
                >
                    عرض المزيد من الحالات
                </Link>
                <div className='md:hidden flex flex-1 items-center'>
                    <Quote description={BOX_DESC} title={''} />
                </div>
            </section>
        </>
    );
};

const BoxCounter = ({ label, value1 }: { label: string, value1: number }) => {
    return (
        <div
            className='flex flex-col items-center gap-4 rounded-3xl border-4 border-dashed flex-1 md:min-w-[300px] py-4 px-6 md:flex-grow'>
            <p className='text-2xl'>{label}</p>
            <div>
                <p className='text-center text-3xl text-green-600'>{currFormatter(value1)}</p>
                {/*<p className='text-center text-3xl text-orange-600'>{value2} ₺</p>*/}
            </div>
        </div>
    );
}

export default Box;