import { AbsctractClass } from "./classAbstract.js";
export class ClassRiche extends AbsctractClass {
    constructor(label, value, prix, percks) {
        super(label, value, prix, percks);
    }
}
ClassRiche.LABEL = "FIRST";
ClassRiche.VALUE = "FIRST";
ClassRiche.PRIX = 0.5;
ClassRiche.PRECKS = "CHAUFFERU";
