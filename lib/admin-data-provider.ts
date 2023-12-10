import { dataProvider } from "ra-data-simple-prisma";
import { CreateParams, DataProvider, UpdateParams, withLifecycleCallbacks, } from "react-admin";

// const endpoint = "/api";
const endpoint = process.env.NEXT_PUBLIC_API_URL as string;
console.log('endpoint',endpoint);
const baseDataProvider = dataProvider(endpoint);

type NewsParams = {
    id: string;
    title: string;
    description: string;
    date: string,
    image: {
        rawFile: File;
        src?: string;
        title?: string;
    };
};
const createPostFormData = (
    params: CreateParams<NewsParams> | UpdateParams<NewsParams>
) => {
    const formData = new FormData();
    params.data.image?.rawFile && formData.append("image", params.data.image.rawFile);
    params.data.title && formData.append("title", params.data.title);
    params.data.description && formData.append("description", params.data.description);
    params.data.date && formData.append("date", params.data.date);

    return formData;
};

const convertFileToBase64 = (file: {
    rawFile: File;
    src?: string;
    title?: string;
}) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file.rawFile);
    });

export const adminDataProvider: DataProvider = withLifecycleCallbacks(baseDataProvider, [
    {
        resource: 'news',
        beforeCreate: async (params: any, dataProvider: DataProvider) => {
            console.log('params.data', params.data);
            const image = params.data.image?.rawFile;
            let base64Image = null;
            if (image) {
                base64Image = await convertFileToBase64(params.data.image);
            }

            return {
                ...params,
                data: {
                    ...params.data,
                    image: { src: base64Image, title: image.name }
                }
            }
        }
    }
]);

/*
export const adminDataProvider: DataProvider = {
    ...baseDataProvider,
    create: async (resource, params) => {
        console.log('resource', resource);
        if (resource === "news") {
            console.log('params.data', params.data);
            const image = params.data.image?.rawFile;
            let base64Image = null;
            if (image) {
                base64Image = await convertFileToBase64(params.data.image.rawFile);
            }

            return baseDataProvider.create(resource, { ...params, data: { ...params.data, image: base64Image } });
        }

        return baseDataProvider.create(resource, params);
    }
}*/
