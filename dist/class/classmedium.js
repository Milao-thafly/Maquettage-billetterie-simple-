Classe;
medium;
import { AbsctractClass } from "./classAbstract.js";
export class ClassMedium extends AbsctractClass {
    constructor(label, value, prix, perks) {
        super(label, value, prix, perks);
    }
}
ClassMedium.LABEL = "BUSINESS";
ClassMedium.VALUE = "BUSINESS";
ClassMedium.PRIX = 0.25;
ClassMedium.PERKS = "CHAUFFERU";
