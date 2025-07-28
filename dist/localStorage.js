export function saveFormData(data) {
    localStorage.setItem("formulaire", JSON.stringify(data));
}
export function loadFormData() {
    const getinfo = localStorage.getItem("formulaire");
    return getinfo ? JSON.parse(getinfo) : null;
}
