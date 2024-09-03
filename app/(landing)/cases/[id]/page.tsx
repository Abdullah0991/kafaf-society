import React from 'react';
import prisma from "@/lib/prisma";
import BackButton from "@/components/BackButton";
import Image from "next/image";
import { getImagePath, urlify } from "@/lib/helpers";
import ProgressBar from "@/components/ProgressBar";
import YTPlayer from "@/components/YTPlayer";
import DonateButton from "@/components/DonateButton";
import type { Metadata, ResolvingMetadata } from 'next'
import { APP_TITLE } from "@/constants";

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

const getTask = async (id: number) => {
    return prisma.tasks.findUnique({
        where: {
            id
        }
    });
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // fetch data
    const task = await getTask(+params.id);

    if (!task) {
        return {}
    }

    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_APP_DOMAIN || 'http://localhost:3000'),
        title: `${task.title} - ${APP_TITLE}`,
        description: task.description,
        openGraph: {
            title: task.title,
            description: task.description,
            locale: 'ar-SY',
            type: "article",
            images: {
                url: getImagePath(task.image),
                alt: task.title
            }
        }
    }
}

const CasePage = async ({ params }: Props) => {
    const task = await getTask(+params.id);

    if (!task) {
        return <div className='max-container padding-container py-28'>
            <h1 className='text-center text-4xl'>لا توجــد نتـائـج</h1>
        </div>;
    }

    const completed = task.cash >= task.target;

    return (
        <article className='max-container padding-container py-10 md:py-16'>
            <div className='relative w-full h-[200px] md:h-[300px] border rounded-md'>
                <BackButton className='absolute -top-9' />
                <Image
                    src={getImagePath(task.image)}
                    alt={task.title}
                    fill
                    className='rounded-md object-fill md:object-contain'
                />
            </div>
            <h1 className='text-xl md:text-2xl mt-5 md:mt-10 mb-4 px-4 py-2 border-r-4 bg-gray-10'>
                {task.title}:
            </h1>
            <div className='flex flex-col-reverse md:flex-row items-end mb-6 gap-5'>
                <div className='w-full flex-1'>
                    {!completed && <DonateButton className='w-full md:w-1/2' />}
                    {
                        completed &&
                        <p className='font-bold text-white text-center p-1 w-1/2 bg-green-600 rounded-full'>
                            مكتلمة!
                        </p>
                    }
                </div>
                <ProgressBar max={task.target} current={task.cash} label='تقدم الحالة' className='flex-1' />
            </div>
            <div
                className='flex flex-col md:flex-row px-4 py-4 md:mb-10 border rounded-md min-h-[200px] gap-8 md:gap-4'>
                <p className='text-lg whitespace-break-spaces flex-1'
                   dangerouslySetInnerHTML={{ __html: urlify(task.description) }}>
                </p>
                {task.mediaUrl &&
                    <div className='flex-1'>
                        <YTPlayer url={task.mediaUrl} title={task.title} />
                    </div>
                }
            </div>
        </article>
    );
};

export default CasePage;
