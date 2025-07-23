import { AbsctractClass } from "./classAbstract.js";
export class ClassEco extends AbsctractClass {
    constructor() {
        super(ClassEco.label, ClassEco.value, ClassEco.prix, ClassEco.perks);
    }
    // Getters estáticos
    static get label() {
        return this.LABEL;
    }
    static get value() {
        return this.VALUE;
    }
    static get prix() {
        return this.PRIX;
    }
    static get perks() {
        return this.PERKS;
    }
}
ClassEco.LABEL = "ECO";
ClassEco.VALUE = "ECO";
ClassEco.PRIX = 0.1;
ClassEco.PERKS = "CHAUFFERU";
