import { News } from ".prisma/client";
import { getImagePath } from "@/lib/helpers";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ id, title, description, image, date }: News) => {
    return (
        <div
            className="relative flex flex-col md:flex-row space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 w-full md:w-3/4 md:max-w-3xl mx-auto border border-white bg-white">
            <div className="w-full md:w-2/3 bg-white flex flex-col space-y-4 p-3">
                <div>
                    <h3 className="text-emerald-600 md:text-xl text-lg">{title}</h3>
                    <div className='border bg-gray-20 mt-2' />
                </div>
                <p className="md:text-md text-gray-500 text-base line-clamp-3">{description}</p>
                <div className="text-sm text-gray-800 flex justify-around">
                    <div>
                        <span>بتاريخ</span>
                        &nbsp;
                        <span>
                        {new Date(date).toLocaleDateString()}
                    </span>
                    </div>
                    <Link href={`/news/${id}`} className='text-blue-500'>
                        متابعة القراءة
                    </Link>
                </div>
            </div>
            <div className="w-full md:w-1/3 bg-white grid place-items-center">
                <Image
                    src={getImagePath(image)}
                    alt="tailwind logo"
                    className="rounded-xl"
                    width={350}
                    height={100}
                />
            </div>
        </div>
    );
};

export default NewsCard;