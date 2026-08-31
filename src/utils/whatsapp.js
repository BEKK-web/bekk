const WHATSAPP_NUMBER = '5491122296226';

export function waLink(message) {
    if (!message) return `https://wa.me/${WHATSAPP_NUMBER}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
