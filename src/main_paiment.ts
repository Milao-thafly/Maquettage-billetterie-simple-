const formulaire_paiement = document.getElementById("payment_form") as HTMLFormElement;

formulaire_paiement.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(formulaire_paiement);
    const errors = [];
    // ?.toString()?? "" : - ?.toString() fait que formData.get("") n'est pas null || unedifed
    //                      - ?? ""  fait que si formData.get("")?.toString() est null || unedifed alors il prend un champ vide et crée une erreur
    const data = {
        name_card: formData.get("name_card")?.toString() ?? "",
        number_card: formData.get("number_card")?.toString() ?? "",
        date_card: formData.get("date_card")?.toString() ?? "",
        cvv_card: formData.get("cvv_card")?.toString() ?? "",
    };

    function isValidCardNumber(cardNumber: string): boolean {
        // Nettoie les espaces ou tirets éventuels
        const cleaned = cardNumber.replace(/\D/g, "");

        let sum = 0;
        let shouldDouble = false;

        // On parcourt les chiffres de droite à gauche
        for (let i = cleaned.length - 1; i >= 0; i--) {
            let digit = parseInt(cleaned[i]);

            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) digit -= 9; // même chose que : digit = digit - 9
            }

            sum += digit;
            shouldDouble = !shouldDouble;
        }

        return sum % 10 === 0;
    }

    if (!data.name_card || data.name_card.length < 2) {
        errors.push("Le nom de la carte est invalide");
    }

    if (!data.number_card || !isValidCardNumber(data.number_card)) {
        errors.push("Le numéro de carte est invalide.");
    }

    const regexp_date_card = /^(0[1-9]|1[0-2])\/(20[2-9][0-9])$/;

    if (!data.date_card || !regexp_date_card.test(data.date_card)) {
        errors.push("La date d'expiration est invalide et doit etre MM/AAAA.")
    }

    if (!data.cvv_card || !/^\d{3,4}$/.test(data.cvv_card)) {
        errors.push("CVV invalide: il dois contenir 3 ou 4 chiffres");
    }

    if (errors.length > 0) {
        const container_error = document.getElementById("error");

        if (container_error) {
            container_error.innerHTML = ""; // Nettoie les erreurs précédentes
            const ul = document.createElement("ul");

            errors.forEach((error) => {
                const li = document.createElement("li");
                li.textContent = error;
                ul.appendChild(li);
            });

            container_error.appendChild(ul);
        }
        return;
    };

    const container_ticket = document.getElementById("payment_ticket");

    if (container_ticket) {
        const last4 = data.number_card.slice(-4);
        container_ticket.innerHTML = `
        <div style="border: 1px solid #ccc; padding: 15px; border-radius: 5px; background: #5a7d9a;">
            <h3>🎫 Ticket de paiement</h3>
            <p><strong>Nom :</strong> ${data.name_card}</p>
            <p><strong>Carte :</strong> **** **** **** ${last4}</p>
            <p><strong>Expiration :</strong> ${data.date_card}</p>
            <p style="color: green; font-weight: bold;">✅ Paiement effectué avec succès !</p>
        </div>
    `;
        container_ticket.style.display = "block";
    }
    
    const container_error = document.getElementById("error");

    if (formulaire_paiement && container_error) {
        
        formulaire_paiement.style.display = "none";
        container_error.style.display = "none";
        
    }

});