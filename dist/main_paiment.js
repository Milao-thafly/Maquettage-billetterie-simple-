"use strict";
const formulaire_paiement = document.getElementById("payment_form");
formulaire_paiement.addEventListener("submit", (e) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    e.preventDefault();
    const formData = new FormData(formulaire_paiement);
    const errors = [];
    // ?.toString() ?? "" : - ?.toString() fait que formData.get("") n'est pas null || unedifed
    //                      - ?? ""  fait que si formData.get("")?.toString() est null || unedifed alors il prend un champ vide et crée une erreur
    const data = {
        name_card: (_b = (_a = formData.get("name_card")) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "",
        number_card: (_d = (_c = formData.get("number_card")) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : "",
        date_card: (_f = (_e = formData.get("date_card")) === null || _e === void 0 ? void 0 : _e.toString()) !== null && _f !== void 0 ? _f : "",
        cvv_card: (_h = (_g = formData.get("cvv_card")) === null || _g === void 0 ? void 0 : _g.toString()) !== null && _h !== void 0 ? _h : "",
    };
    function isValidCardNumber(cardNumber) {
        // Nettoie les espaces ou tirets éventuels
        const cleaned = cardNumber.replace(/\D/g, "");
        let sum = 0;
        let shouldDouble = false;
        // On parcourt les chiffres de droite à gauche
        for (let i = cleaned.length - 1; i >= 0; i--) {
            let digit = parseInt(cleaned[i]);
            if (shouldDouble) {
                digit *= 2;
                if (digit > 9)
                    digit -= 9; // même chose que : digit = digit - 9
            }
            sum += digit;
            shouldDouble = !shouldDouble;
        }
        return sum % 10 === 0;
    }
    if (!data.name_card || data.name_card.length < 10) {
        errors.push("Le nom de la carte est invalide");
    }
    if (!data.number_card || !isValidCardNumber(data.number_card)) {
        errors.push("Le numéro de carte est invalide.");
    }
    const regexp_date_card = /^(0[1-9]|1[0-2])\/(20[2-9][0-9])$/;
    if (!data.date_card || !regexp_date_card.test(data.date_card)) {
        errors.push("La date d'expiration est invalide et doit etre MM/AAAA.");
    }
    if (!data.cvv_card || !/^\d{3,4}$/.test(data.cvv_card)) {
        errors.push("CVV invalide: il dois contenir 3 ou 4 chiffres");
    }
    if (errors.length > 0) {
        const container_error = document.getElementById("error");
        if (container_error) {
            container_error.innerHTML = ""; // Nettoie les erreurs précédentes
        }
        if (container_error) {
            const ul = document.createElement("ul");
            errors.forEach((error) => {
                const li = document.createElement("li");
                li.textContent = error;
                ul.appendChild(li);
            });
            container_error.appendChild(ul);
        }
        return;
    }
    ;
    console.log("Formulaire soumis :", data);
    alert("Formulaire soumis avec succès !");
});
