import { AbsctractClass } from "./classAbstract.js";
export class ClassEco extends AbsctractClass {
    constructor(label, value, prix, perks) {
        super(label, value, prix, perks);
    }
}
ClassEco.LABEL = "ECO";
ClassEco.VALUE = "ECO";
ClassEco.PRIX = 0.1;
ClassEco.PERKS = "CHAUFFERU";
