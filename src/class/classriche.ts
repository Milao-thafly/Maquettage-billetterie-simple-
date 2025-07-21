import { AbsctractClass } from "./classAbstract.js";

export class ClassRiche extends AbsctractClass{
    private static LABEL ="FIRST"
    private static VALUE ="FIRST"
    private static PRIX = 0.5
    private static PRECKS = "CHAUFFERU"

    constructor(label: string, value: string, prix: number, percks: string){
        super(label, value, prix, percks)
    }
    
}