import PageHeader from "@/components/PageHeader";
import TabControl from "@/components/TabControl";
import CaseDisplay from "@/components/CaseDisplay";
import { getCases } from "@/lib/tasks-api";

const CasesPage = async ({ searchParams }: { searchParams: Record<string, string> }) => {
    const selectedCategory = Number(searchParams['category']?.toString()) || 0;

    const data = await getCases(selectedCategory);
    const completed = await getCases(selectedCategory, true);

    return (
        <>
            <PageHeader title='الحالات' noCarousel />
            <div className='max-container padding-container py-10 flex flex-col justify-center gap-5'>
                <TabControl />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
                    {
                        data && data.length ?
                            data.map((task) => (
                                <CaseDisplay key={task.id} rec={task} />
                            ))
                            :
                            <h2 className='text-center text-2xl'>لا توجــد حالات غير مكتملة.</h2>
                    }
                </div>
                {!!(completed && completed.length) &&
                    <div className='border bg-gray-20 my-5 relative'>
                        <span className='absolute bg-white text-gray-30 left-1/2 -translate-x-1/2 -top-3 px-2'>
                            الحالات المكتملة
                        </span>
                    </div>
                }
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