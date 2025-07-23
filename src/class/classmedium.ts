Classe medium;
import { AbsctractClass } from "./classAbstract.js";

export class ClassMedium extends AbsctractClass{
    private static LABEL ="BUSINESS"
    private static VALUE ="BUSINESS"
    private static PRIX = 0.25
    private static PERKS = "CHAUFFERU"

    constructor(label: string, value: string, prix: number, perks: string){
        super(label, value, prix, perks)
    }

}
