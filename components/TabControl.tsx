'use client';
import { TaskCategories } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const TabControl = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const { replace } = useRouter();
    const selected = Number(searchParams.get('category')?.toString()) || 0;

    const handleTabChange = (cat: number) => {
        const params = new URLSearchParams(searchParams);
        if (cat !== null && cat !== undefined) {
            params.set('category', cat.toString());
        } else {
            params.delete('category');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md">
            {
                TaskCategories.slice(0, 2).map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => handleTabChange(cat.id)}
                        className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${selected === cat.id ? 'bg-emerald-600 text-white' : ''}`}
                    >
                        {cat.name}
                    </button>
                ))
            }
        </div>
    );
};

export default TabControl;