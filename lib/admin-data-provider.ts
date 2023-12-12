import { dataProvider } from "ra-data-simple-prisma";
import { DataProvider, withLifecycleCallbacks } from "react-admin";

// const endpoint = "/api";
const endpoint = process.env.NEXT_PUBLIC_API_URL as string;
console.log('endpoint', endpoint);
const baseDataProvider = dataProvider(endpoint);

type RaImageProp = null | string | {
    rawFile: File;
    src?: string;
    title?: string;
};

const convertFileToBase64 = (file: File) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });

const replaceFileWithB64 = async (data: Record<string, any>, fieldKey: string) => {
    const image: RaImageProp = data[fieldKey];
    // No image or image is already uploaded so no need to any action
    if (!image || typeof image === "string") {
        return data;
    }

    // Otherwise the image should be an object with `rawFile` prop
    const imageFile = image.rawFile;
    let base64Image = await convertFileToBase64(imageFile);

    return { ...data, [fieldKey]: { src: base64Image, title: imageFile.name } };
}

export const adminDataProvider: DataProvider = withLifecycleCallbacks(baseDataProvider, [
    {
        resource: 'news',
        beforeSave: async (params: any, _dataProvider: DataProvider) => {
            return replaceFileWithB64(params, 'image');
        }
    },
    {
        resource: 'campaigns',
        beforeSave: async (params, _dataProvider1) => {
            return replaceFileWithB64(params, 'image');
        },
    },
    {
        resource: 'tasks',
        beforeSave: async (params, _dataProvider1) => {
            return replaceFileWithB64(params, 'image');
        },
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
