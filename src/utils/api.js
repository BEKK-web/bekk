export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://bekk.pythonanywhere.com/';

export function productImageUrl(image) {
    return encodeURI(`${API_BASE_URL}${image}`);
}

export async function getProducts() {
    const res = await fetch(`${API_BASE_URL}products/api/`, {
        next: { revalidate: 3600 },
    });
    if (!res.ok) {
        throw new Error('No se pudieron cargar los productos');
    }
    return res.json();
}
