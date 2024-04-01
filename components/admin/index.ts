export { NewsEdit, NewsList, NewsCreate } from './NewsAdmin';
export { CampaignsList, CampaignsCreate, CampaignEdit } from './CampaignsAdmin';
export { StatisticsList, StatisticsCreate, StatisticsEdit } from './StatisticsAdmin';
export { ServicesList, ServicesCreate, ServicesEdit } from './ServicesAdmin';
export { TasksList, TasksCreate, TasksEdit } from './TasksAdmin';
export { BoxesList, BoxesCreate, BoxesEdit } from './BoxesAdmin';
export { CarouselsList, CarouselsEdit, CarouselsCreate } from './CarouselsAdmin';
export { PartnersList, PartnersCreate, PartnersEdit } from './PartnersAdmin';

export const generateImagePreview = (value: any) => {
    const api = process.env.NEXT_PUBLIC_API_URL;

    return !!value ?
        (typeof value === 'string' ? // usually this the db value
            {
                src: `${api}/files?n=${value}`,
                rawFile: new File([], "png", { type: "image/png" })
            } : value)
        : value
};
