import { AbsctractClass } from "./classAbstract.js";

export class ClassRiche extends AbsctractClass{
    private static LABEL =""
    private static VALUE =""
    private static PRIX = 100
    private static PRECKS = ""

    constructor(label: string, value: string, prix: number, percks: string){
        super(label, value, prix, percks)
    }
    
}