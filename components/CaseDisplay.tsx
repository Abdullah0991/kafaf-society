import React from 'react';
import Image from "next/image";
import ProgressBar from "@/components/ProgressBar";
import { currFormatter, getImagePath } from "@/lib/helpers";
import Button from "@/components/Button";
import { TaskCategories } from "@/constants";
import Link from "next/link";
import DonateButton from "@/components/DonateButton";
import { Tasks } from "@prisma/client";

type Props = {
    rec: Tasks;
    showDonateButton?: boolean;
}


const TaskCategoryToColor = [
    'bg-red-500',
    'bg-purple-500',
    'bg-emerald-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-blue-500'
];

const CaseDisplay = async ({ rec, showDonateButton = true }: Props) => {
    /*let rec;
    if (latest) {
        rec = await getLatestCase(category.id);
    } else if (id) {
        rec = await getCaseById(id);
    }

    if (!rec && returnNull) {
        return null;
    }*/
    const category = TaskCategories[rec.type];
    const completed = rec.cash >= rec.target;

    return (
        <div className={`border rounded-2xl shadow ${completed ? 'bg-gradient-to-br from-lime-50 to-lime-300' : ''}`}>
            <div className='relative w-full min-h-[200px]'>
                <Image src={getImagePath(rec.image)} alt={'case'} fill objectFit='cover'
                       className='rounded-tl-2xl rounded-tr-2xl' />
            </div>
            <div className='flex flex-col gap-6 py-6 px-4 md:px-6 min-h-[300px]'>
                <ProgressBar label={'التقدم'} max={rec.target} current={rec.cash} />
                <article className='flex flex-col items-center justify-between flex-grow'>
                    <div className='flex justify-between w-full'>
                        <div className='flex-1'>
                            <span className='text-lg md:text-xl text-gray-30 ml-2'>المبلغ المجموع:</span>
                            <span className='text-lg md:text-xl text-emerald-600 font-bold'>
                                {currFormatter(rec.cash)}
                            </span>
                        </div>
                        <div
                            className={`px-2 py-1 rounded-md ${TaskCategoryToColor[category.id]} text-white text-xs flex items-center`}>
                            <span>{category.name}</span>
                        </div>
                    </div>
                    <p className='text-md text-center line-clamp-3'>
                        {rec.description}
                    </p>
                    {
                        showDonateButton &&
                        <div className='flex gap-3 items-center w-full mt-2'>
                            {!completed && <DonateButton className='w-3/4' />}
                            {completed &&
                                <p className='font-bold text-white text-center p-1 w-3/4 bg-green-600 rounded-full'>
                                    مكتلمة!
                                </p>
                            }
                            <Link href={`/cases/${rec.id}`}>
                                <Button
                                    label='المزيد من المعلومات'
                                    className='p-2 text-cyan-500 bg-white text-xs cursor-pointer'
                                />
                            </Link>
                        </div>
                    }
                </article>
            </div>
        </div>
    )
}

export default CaseDisplay;