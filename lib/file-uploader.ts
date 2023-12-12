import { existsSync, mkdirSync, unlinkSync, writeFileSync } from "fs";
import { extname } from "path";

export const uploadFile = async (fileName: string, imageBase64: string): Promise<string> => {
    console.log('uploading file', fileName);
    try {
        if (!existsSync('./upload')) {
            mkdirSync('./upload');
        }
        const newName = Date.now().toString() + extname(fileName);
        writeFileSync(`./upload/${newName}`, imageBase64, { encoding: 'base64' });
        return Promise.resolve(newName);
    } catch (e) {
        console.error('store file error', e);
        return Promise.reject(e);
    }
}

export const removeFile = async (fileName: string): Promise<void> => {
    console.log('removing file', fileName);
    if (!fileName) {
        return Promise.resolve();
    }

    try {
        if (existsSync(`./upload/${fileName}`)) {
            unlinkSync(`./upload/${fileName}`);
        }
    } catch (e) {
        console.error('removing file error', e);
        return Promise.reject(e);
    }
    return Promise.resolve();
}