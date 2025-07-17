// "use strict";
// document.addEventListener('DOMContentLoaded', () => {
//   const btnClasse = document.getElementById('btnClasse');
//   const btnPays = document.getElementById('btnPays');
//   const inputClasse = document.getElementById('inputClasse');
//   const inputPays = document.getElementById('inputPays');

//   // Выбор класса
//   document.querySelectorAll('.dropdown-menu')[0].querySelectorAll('.dropdown-item').forEach(item => {
//     item.addEventListener('click', e => {
//       e.preventDefault();
//       const valeur = item.getAttribute('data-value');
//       btnClasse.textContent = valeur;
//       inputClasse.value = valeur;
//     });
//   });

//   // Выбор страны
//   document.querySelectorAll('.dropdown-menu')[1].querySelectorAll('.dropdown-item').forEach(item => {
//     item.addEventListener('click', e => {
//       e.preventDefault();
//       const valeur = item.getAttribute('data-value');
//       btnPays.textContent = valeur;
//       inputPays.value = valeur;
//     });
//   });
// });
