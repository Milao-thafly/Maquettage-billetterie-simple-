export class ClassTrip {
    constructor(label, value, prix, perks) {
        this.label = label;
        this.value = value;
        this.prix = prix;
        this.perks = perks;
    }
    getLabel() {
        return this.label;
    }
    getValue() {
        return this.value;
    }
    getPrix() {
        return this.prix;
    }
    getPerks() {
        return this.perks;
    }
}
const classEco = new ClassTrip("eco", "eco", 0.1, "Siège a côté de la fenetre en cas de crash t'est le premier.");
const classMedium = new ClassTrip("Medium", "Medium", 0.25, "Un siège normal pour une personne normal");
const classRiche = new ClassTrip("Riche", "Riche", 0.5, "Tout ce que vous voudrez my looord");
