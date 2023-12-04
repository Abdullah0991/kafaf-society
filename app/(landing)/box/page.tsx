import React from 'react';
import CaseDisplay from "@/components/CaseDisplay";
import { currFormatter } from "@/constants";

const Box = () => {
    return (
        <>
            <section className='max-container padding-container min-h-screen'>
                <div className='py-6 md:py-10'>
                    <h1 className='text-3xl md:text-5xl text-center md:text-start'>صندوق المستقبل بأيدينا</h1>
                    <div className='mt-10 flex flex-col lg:flex-row items-center gap-5'>
                        <div className='flex flex-col md:flex-row gap-3 items-center'>
                            <h2 className='text-3xl'>إجمالي تبرعاتكم:</h2>
                            <span className='text-4xl text-green-600'>{currFormatter(4056)}</span>
                        </div>
                        <span className='hidden flex-grow md:block' />
                        <div className='flex gap-3'>
                            <span>آخر تحديث:</span>
                            <span className='text-gray-30'>{new Date().toLocaleString()}</span>
                        </div>
                    </div>
                </div>
                <div className='border bg-gray-20 mb-6' />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
                    <BoxCounter label={'صندوق المحلات'} value1={256} />
                    <BoxCounter label={'صندوق المولات'} value1={2500} />
                    <BoxCounter label={'صندوق الجامعة'} value1={1300} />
                </div>

                <a
                    href={'#case'}
                    className='flex justify-center gap-3 rounded-full border mt-10 w-full p-4 bg-emerald-700 text-white cursor-pointer'>
                    هل تريد المساعدة؟
                </a>
            </section>
            <section id='case' className='max-container padding-container flex flex-col items-center gap-5 mt-6'>
                <CaseDisplay
                    description={'عمر بحاجة لعملية في العين لكي يستعيد نظره كما كان وتحتاج العملية لـ 450$ دولار أمريكي'}
                    gathered={200}
                    total={450}
                    media={'/case.png'}
                />
                <a
                    href={'#'}
                    className='flex justify-center gap-3 rounded-full border mt-2 w-full p-4 bg-emerald-500 text-white cursor-pointer'>
                    تبرع
                </a>
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