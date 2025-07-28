



export function saveFormData(data: any): void {
  localStorage.setItem("formulaire", JSON.stringify(data));
}

export function loadFormData(): any | null {
  const getinfo = localStorage.getItem("formulaire");
  return getinfo ? JSON.parse(getinfo) : null;
}

