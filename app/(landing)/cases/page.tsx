import PageHeader from "@/components/PageHeader";
import TabControl from "@/components/TabControl";
import CaseDisplay from "@/components/CaseDisplay";
import { getCases } from "@/lib/tasks-api";
import React from "react";

const CasesPage = async ({ searchParams }: { searchParams: Record<string, string> }) => {
    const selectedCategory = Number(searchParams['category']?.toString()) || 0;

    const data = await getCases(selectedCategory);
    const completed = await getCases(selectedCategory, true);

    /*if (!data || !data.length) {
        return <div className='max-container padding-container py-28'>
            <h1 className='text-center text-4xl'>لا توجــد نتـائـج</h1>
        </div>
    }*/

    return (
        <>
            <PageHeader title='الحالات' noCarousel />
            <div className='max-container padding-container py-10 flex flex-col justify-center gap-5'>
                <TabControl />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
                    {
                        data.map((task) => (
                            <CaseDisplay key={task.id} rec={task} />
                        ))
                    }
                </div>
                <div className='border bg-gray-20 my-5' />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
                    {
                        completed.map((task) => (
                            <CaseDisplay key={task.id} rec={task} />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default CasesPage;