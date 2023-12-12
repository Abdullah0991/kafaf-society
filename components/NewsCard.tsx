import { News } from ".prisma/client";

const NewsCard = ({ title, description, image, date }: News) => {
    return (
        <div
            className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 w-full md:w-1/2 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
            <div className="w-full md:w-2/3 bg-white flex flex-col space-y-4 p-3">
                <div>
                    <h3 className="text-emerald-600 md:text-xl text-lg">{title}</h3>
                    <div className='border bg-gray-20 mt-2' />
                </div>
                <p className="md:text-md text-gray-500 text-base">{description}</p>
                <p className="text-sm text-gray-800">
                    <span>بتاريخ</span>
                    &nbsp;
                    <span>
                        {new Date(date).toLocaleDateString()}
                    </span>
                </p>
            </div>
            <div className="w-full md:w-1/3 bg-white grid place-items-center">
                {image && <img
                    src={`/api/files?n=${image}`}
                    alt="tailwind logo"
                    className="rounded-xl"
                />}
            </div>
        </div>
    );
};

export default NewsCard;