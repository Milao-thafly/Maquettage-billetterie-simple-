
// export class FormStorage{
//     static save(data: any): void {
//     localStorage.setItem("formulaire", JSON.stringify(data))
//     }

//     static load(): any | null {
//         const getform = localStorage.getItem("formulaire");
//         return getform ? JSON.parse(getform): null;
//     }

// }
export function saveFormData(data: any): void {
  localStorage.setItem("formulaire", JSON.stringify(data));
}

export function loadFormData(): any | null {
  const getinfo = localStorage.getItem("formulaire");
  return getinfo ? JSON.parse(getinfo) : null;
}