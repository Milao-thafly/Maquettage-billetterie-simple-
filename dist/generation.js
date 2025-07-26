//Générer un code de réservation unique.
export function generateCode() {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `RES-${timestamp}-${random}`;
}
// generation d'un id
export function generateId() {
    return Date.now().toString();
}
// generation d'un code de reservation
export function generateShortCode(length = 6) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
