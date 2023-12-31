import React from 'react';
import Image from "next/image";
import { SERVICES } from "@/constants";
import Link from "next/link";

const Services = () => {
    return (
        <section
            className='flex flex-col justify-center min-h-screen overflow-hidden bg-gradient-to-b from-emerald-400 lg:bg-kefaf-bg bg-cover bg-center py-16'>
            <div className='max-container padding-container w-full'>
                <div className='flex w-full flex-col'>
                    <div className='bg-white rounded-3xl px-6 py-4 border-2 border-emerald-400'>
                        <h2 className='bold-40 lg:bold-64 text-center text-emerald-500'>
                            الأعمال المنجزة
                        </h2>
                    </div>
                    <ul className='mt-10 grid gap-10 md:grid-cols-3 xl:grid-cols-6 md:mt-16 xl:mt-44 xl:gap-20'>
                        {
                            SERVICES.map((service) => (
                                <li key={service.key}
                                    className='flex w-full flex-1 flex-col items-center rounded-2xl bg-white border hover:bg-gray-10'>
                                    <Link href={service.href}>
                                        <div className='rounded-full p-4 lg:p-7 flex justify-center'>
                                            <Image src={service.icon} alt='service' width={128} height={64} />
                                        </div>
                                        <h2 className='text-center px-3 pb-2'>
                                            {service.title}
                                        </h2>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Services;