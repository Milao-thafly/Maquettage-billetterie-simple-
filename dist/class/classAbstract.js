export class AbsctractClass {
    constructor(label, value, prix, perks) {
        this.label = label;
        this.value = value;
        this.prix = prix;
        this.perks = perks;
    }
    getLabel() {
        return this.label;
    }
    setLabel(newLabel) {
        this.label = newLabel;
    }
    getValue() {
        return this.value;
    }
    setValue(newValue) {
        this.value = newValue;
    }
    getPrix() {
        return this.prix;
    }
    setPrix(newPrix) {
        this.prix = newPrix;
    }
    getPerks() {
        return this.perks;
    }
    setPerks(newPerks) {
        this.perks = newPerks;
    }
}
