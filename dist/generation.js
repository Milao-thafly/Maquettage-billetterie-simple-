"use strict";
//Générer un code de réservation unique.
const paymentCalculator = new vaVoirLeMonde();
function generateCode() {
    return 'RES-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
}
/////////////////////////////////////////////////////////////////
//enregistrer la reserve
function saveReservation(data) {
    const code = generateCode();
    const reservation = Object.assign(Object.assign({ code: code }, data), { date: new Date().toLocaleDateString('fr-FR') });
    localStorage.setItem(`reservation_${code}`, JSON.stringify(reservation));
    return code;
}
//checher la reserve 1
function findReservation(code) {
    const stored = localStorage.getItem(`reservation_${code.toUpperCase()}`);
    return stored ? JSON.parse(stored) : null;
}
//confirmer la reserve
function showConfirmation(code, data) {
    const container = document.querySelector('.card');
    if (!container)
        return;
    ///////////////////////////////////////////////
}
///////////////////////////////////////////////
