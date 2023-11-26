import Image from "next/image";
import Link from "next/link";
import YTPlayer from "@/components/YTPlayer";
import { CAMPAIGNS, MATCH_URL_YOUTUBE } from "@/constants";
import PageHeader from "@/components/PageHeader";

const carousel = [
    '/campaign/img_1.jpeg',
    '/campaign/img_2.jpeg',
    '/campaign/img_3.jpeg',
];

const Campaign = () => {
    return (
        <>
            <PageHeader title='الحملات' images={carousel} />
            <div className='max-container padding-container pb-20 pt-6'>
                {
                    (!CAMPAIGNS || !CAMPAIGNS.length) ?
                        <h1 className='text-center text-3xl py-10'>لا توجــد نتـائـج</h1> :
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-2'>
                            {
                                CAMPAIGNS.map((camp) => (
                                    <div key={camp.id} className='border rounded p-3'>
                                        {MATCH_URL_YOUTUBE.test(camp.media) ?
                                            <YTPlayer
                                                url={camp.media}
                                                title={camp.title}
                                            /> :
                                            <Image src={camp.media} alt={camp.title} width={560} height={100} />}
                                        <Link href={`/campaign/${camp.id}`}><p
                                            className='pt-4 text-xl text-center'>{camp.title}</p>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                }
            </div>
        </>
    );
};

export default Campaign;