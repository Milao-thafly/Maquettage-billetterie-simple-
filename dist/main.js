import { saveFormData } from "./localStorage.js";
const formulaire = document.getElementById("formulaire");
document.querySelectorAll("input[name='classe']").forEach((radio) => {
    radio.addEventListener("input", () => {
        const input = document.getElementById("inputClasse");
        if (input) {
            input.value = radio.value;
        }
    });
});
document.querySelectorAll("input[name='pays']").forEach((radio) => {
    radio.addEventListener("input", () => {
        const input = document.getElementById("inputPays");
        if (input) {
            input.value = radio.value;
        }
    });
});
formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(formulaire);
    const data = {
        username: formData.get("nom"),
        first_name: formData.get("prenom"),
        email: formData.get("email"),
        age: formData.get("age"),
        phone: formData.get("telephone"),
        classe: formData.get("classe"),
        pays: formData.get("pays"),
    };
    const errors = [];
    if (!data.username || (typeof data.username === "string" && data.username.length < 3)) {
        errors.push("Le nom d'utilisateur doit contenir au moins 3 caractères.");
    }
    if (!data.first_name || (typeof data.first_name === "string" && data.first_name.length < 1)) {
        errors.push("Prénom est invalide !");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || (typeof data.email === "string" && !emailRegex.test(data.email))) {
        errors.push("L'adresse e-mail n'est pas valide.");
    }
    if (!data.age) {
        errors.push("Veuillez-nous indiquer votre âge !");
    }
    const phoneRegex = /^[0-9\s+().-]{6,}$/;
    if (!data.phone || (typeof data.phone === "string" && !phoneRegex.test(data.phone))) {
        errors.push("Le numéro de téléphone n'est pas valide.");
    }
    if (!data.classe || data.classe === "") {
        errors.push("Veuillez sélectionner une classe.");
    }
    if (!data.pays || data.pays === "") {
        errors.push("Veuillez sélectionner une destination.");
    }
    if (errors.length > 0) {
        const container_error = document.getElementById("error");
        if (container_error) {
            container_error.innerHTML = `<ul>${errors.map((error) => `<li>${error}</li>`).join("")}</ul>`;
        }
        return;
    }
    // function redirectForm(){
    //   if(formulaire.checkValidity()){
    //   }
    // }
    saveFormData(data);
    alert(`Formulaire soumis avec succès !

Nom : ${data.username}
Prénom : ${data.first_name}
Âge : ${data.age}
Email : ${data.email}
Téléphone : ${data.phone}
Classe : ${data.classe}
Destination : ${data.pays}`);
    console.log("Âge :", data.age);
    window.location.href = "confirmation.html";
    // redirectForm()
});
