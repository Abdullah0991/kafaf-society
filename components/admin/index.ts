export { NewsEdit, NewsList, NewsCreate } from './NewsAdmin';
export { CampaignsList, CampaignsCreate, CampaignEdit } from './CampaignsAdmin';

export const generateImagePreview = (value: any) => {
    return !!value ?
        (typeof value === 'string' ? // usually this the db value
            {
                src: `/api/files?n=${value}`,
                rawFile: new File([], "png", { type: "image/png" })
            } : value)
        : value
};