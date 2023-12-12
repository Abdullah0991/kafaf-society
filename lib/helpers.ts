export const currFormatter = (num: number): string => {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    });

    return USDollar.format(num);
}

export const numFormatter = (num: number): string => {
    let numberFormatter = new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 0
    });

    return numberFormatter.format(num);
}

export const getImagePath = (image: string | null): string => {
    const api = process.env.NEXT_PUBLIC_API_URL;
    return image ? `${api}/files?n=${image}` : '/app_logo_no_attributions.png';
}