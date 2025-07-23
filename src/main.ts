const formulaire = document.getElementById("formulaire") as HTMLFormElement;
formulaire.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formulaire);

  const data = {
    username: formData.get("nom"),
    first_name: formData.get("prenom"),
    email: formData.get("email"),
    age: formData.get("age"),
    phone: formData.get("telephone"),


  };

  const errors: string[] = [];


  if (
    !data.username ||
    (typeof data.username == "string" && data.username.length < 3)
  ) {
    errors.push("Le nom d'utilisateur doit contenir au moins 3 caractères.");
  }


  if (
    !data.first_name ||
    (typeof data.first_name == "string" && data.first_name.length < 1)
  ) {
    errors.push("Prenom est invalide!")
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    !data.email ||
    (typeof data.email == "string" && !emailRegex.test(data.email))
  ) {
    errors.push("L'adresse e-mail n'est pas valide.");
  }

  if (
    !data.age
  ) {
    errors.push("Veuillez-nous indiquer votre age!");
  }

  const phoneRegex = /^[0-9\s+().-]{6,}$/;
  if (!data.phone ||
    (typeof data.phone == "string" && !phoneRegex.test(data.phone))) {
    errors.push("Le numéro de téléphone n'est pas valide.")
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

  console.log("Formulaire soumis :", data);
  alert("Formulaire soumis avec succès !");
});