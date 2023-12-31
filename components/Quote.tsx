import React from 'react';

type Props = {
    title: string;
    description: string;
}

const Quote = ({ title, description }: Props) => {
    return (
        <div className='relative flex flex-1 flex-col xl:w-1/2'>
            {title && <h1 className='font-bold text-4xl lg:text-5xl lg:text-start text-center'>{title}</h1>}
            <blockquote
                className="relative mt-6 p-4 text-xl md:italic border-r-4 lg:border-0 text-neutral-600 quote">
                <div className="stylistic-quote-mark top-0 right-[100%] mr-2" aria-hidden="true">
                    &ldquo;
                </div>
                <p className='mb-4 text-center whitespace-pre-wrap'>{description}</p>
                <div className="stylistic-quote-mark bottom-0 left-[100%] rotate-180 ml-3" aria-hidden="true">
                    &ldquo;
                </div>
            </blockquote>
        </div>
    );
};

export default Quote;