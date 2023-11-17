import React from 'react';
import Image from "next/image";

const ImageCard = ({ url, title }: { url: string, title: string }) => {
    return (
        <>
            <div
                className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div
                    className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <Image
                        src={url}
                        alt={title}
                        fill
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {title}
                        </h5>
                    </div>
                    {/*<p className="block mt-3 font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                        Enter a freshly updated and thoughtfully furnished peaceful home
                        surrounded by ancient trees, stone walls, and open meadows.
                    </p>*/}
                </div>
            </div>
        </>
    );
};

export default ImageCard;