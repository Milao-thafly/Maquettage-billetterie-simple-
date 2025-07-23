"use strict";
const formulaire_paiement = document.getElementById("payment_form");
formulaire_paiement.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formulaire_paiement);
    const errors = [];
    const data = {
        name_card: formData.get("name_card"),
        number_card: formData.get("number_card"),
        date_card: formData.get("date_card"),
        cvv_card: formData.get("cvv_card"),
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
    if (!data.name_card || (typeof data.name_card == "string" && data.name_card.length < 10)) {
        errors.push("Le nom de la carte est invalide");
    }
    if (!data.number_card || (typeof data.number_card === "string" && !isValidCardNumber(data.number_card))) {
        errors.push("Le numéro de carte est invalide.");
    }
    if (!data.date_card) {
        errors.push("La date d'expiration est invalide.");
    }
    if (!data.cvv_card || (typeof data.cvv_card === "string" && !/^\d{3}$/.test(data.cvv_card))) {
        errors.push("CVV invalide: il dois contenir 3 chiffres");
    }
    if (errors.length > 0) {
        const container_error = document.getElementById("error");
        if (container_error) {
            container_error.innerHTML = `<ul>
        ${errors
                .map((error) => {
                return `<li>${error}</li>`;
            })
                .join("")}
        </ul>`;
        }
        return;
    }
    ;
    console.log("Formulaire soumis :", data);
    alert("Formulaire soumis avec succès !");
});
