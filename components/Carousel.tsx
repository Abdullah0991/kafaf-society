'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

const imagesStore = [
    "https://unsplash.it/640/425?image=30",
    "https://unsplash.it/640/425?image=40",
    "https://unsplash.it/640/425?image=50",
]

type CarouselProps = {
    images: string[];
    showPosition?: boolean;
    timerDelay?: number;
}
const Carousel = ({ images, showPosition = false, timerDelay = 2000 }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(
        () => {
            let timer1 = setInterval(() => {
                if (currentIndex < images?.length - 1) {
                    next();
                } else {
                    setCurrentIndex(0);
                }
            }, timerDelay);

            return () => {
                clearInterval(timer1);
            };
        },
        [currentIndex]
    );

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
        }
    }

    const next = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(prevState => prevState + 1);
        }
    }

    return (
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-md bg-gray-100">
            {showPosition && <div
                className="absolute right-5 top-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white opacity-75">
                <span>{`${currentIndex + 1}`}</span>/<span>{`${images.length}`}</span>
            </div>}

            <button
                className="hidden absolute left-4 top-1/2 z-10 md:flex h-10 w-10 transition-opacity duration-300 opacity-20 hover:opacity-100 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
                onClick={prev}
                title={'السابق'}
            >
                <Image src={'/chevron-left.png'} alt={'left'} width={24} height={24} />
            </button>

            <button
                className="hidden absolute right-4 top-1/2 z-10 md:flex h-10 w-10 transition-opacity duration-300 opacity-20 hover:opacity-100 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
                onClick={next}
                title={'التالي'}
            >
                <Image src={'/chevron-right.png'} alt={'left'} width={24} height={24} />
            </button>

            <div className='absolute z-10 left-1/2 -translate-x-1/2 bottom-4'>
                <div className='flex justify-center gap-2'>
                    {
                        images?.map((_img, idx) => (
                            <div
                                className={`h-2 w-2 rounded-full bg-white transition-opacity duration-300 opacity-50 hover:opacity-100 cursor-pointer ${currentIndex === idx ? 'bg-emerald-200' : ''}`}
                                onClick={() => setCurrentIndex(idx)}
                                key={idx}
                            />
                        ))
                    }
                </div>
            </div>

            <div className="relative h-full" style={{ width: '30rem' }}>
                <Image
                    src={images[currentIndex]}
                    alt="image"
                    className="rounded-sm"
                    fill
                    objectFit='fill'
                />
            </div>
        </div>
    );
};

export default Carousel;