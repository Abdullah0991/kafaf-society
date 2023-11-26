import React from 'react';
import Carousel from "@/components/Carousel";

type PageHeaderProps = {
    title: string;
    noCarousel?: boolean;
    images?: string[];
}

const PageHeader = ({ title, images, noCarousel = false }: PageHeaderProps) => {
    return (
        <div className='bg-gray-100 mt-1'>
            <div className='p-5 text-center'>
                <h1 className='text-3xl'>{title}</h1>
            </div>
            {
                !noCarousel &&
                <div className='h-80 bg-gray-100 p-2 md:py-3 md:px-5 flex justify-center'>
                    <Carousel images={images ?? []} />
                </div>
            }
        </div>
    );
};

export default PageHeader;