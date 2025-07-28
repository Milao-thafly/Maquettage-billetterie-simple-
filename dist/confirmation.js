import { loadFormData } from "./localStorage.js";
const btnpasse = document.getElementById("btnpasse");
// Affiche les infos du formulaire dans la div getInfo
document.addEventListener("DOMContentLoaded", () => {
    const data = loadFormData();
    const logContainer = document.getElementById("getInfo");
    if (!logContainer || !data)
        return;
    logContainer.innerHTML = `
        <ul class="list-group mb-3">
            <li class="list-group-item">Nom : ${data.username}</li>
            <li class="list-group-item">Prénom : ${data.first_name}</li>
            <li class="list-group-item">Âge : ${data.age}</li>
            <li class="list-group-item">Email : ${data.email}</li>
            <li class="list-group-item">Téléphone : ${data.phone}</li>
            <li class="list-group-item">Classe : ${data.classe}</li>
            <li class="list-group-item">Destination : ${data.pays}</li>
        </ul>
        
    `;
});
if (btnpasse) {
    btnpasse.addEventListener("click", () => {
        window.location.href = "paiement.html";
    });
}
