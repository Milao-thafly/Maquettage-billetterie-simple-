import { vaVoirLeMonde } from "./class/payFromDistance.js";
export function saveFormData(data) {
    localStorage.setItem("formulaire", JSON.stringify(data));
}
export function loadFormData() {
    const getinfo = localStorage.getItem("formulaire");
    return getinfo ? JSON.parse(getinfo) : null;
}
export function savePrice(classValue, distance) {
    const voyageVOYAGE = new vaVoirLeMonde();
    const prix = voyageVOYAGE.payFromDistance(classValue, distance);
    // localStorage.setItem("prix", JSON.stringify(prix));
    localStorage.setItem("prix", prix.toString());
}
