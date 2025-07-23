import { AbsctractClass } from "./classAbstract.js";

export class ClassEco extends AbsctractClass{
    private static LABEL ="ECO"
    private static VALUE ="ECO"
    private static PRIX = 0.1
    private static PERKS = "CHAUFFERU"

    constructor(label: string, value: string, prix: number, perks: string){
        super(label, value, prix, perks)
    }

}