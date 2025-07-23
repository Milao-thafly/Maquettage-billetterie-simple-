export abstract class AbsctractClass{
    private label: string;
    private value: string;
    private prix: number;
    private perks: string;

    constructor(label: string, value: string, prix: number, perks: string){
        this.label = label
        this.value = value 
        this.prix = prix
        this.perks = perks
    }

    getLabel(): string{
        return this.label
    }

    setLabel( newLabel: string): void {
        this.label = newLabel
    } 

    getValue(): string{
        return this.value
    }

    setValue( newValue: string): void {
        this.value = newValue
    } 

    getPrix(): number{
        return this.prix
    }

    setPrix(newPrix: number): void {
        this.prix = newPrix
    } 

    getPerks(): string{
        return this.perks
    }

    setPerks(newPerks: string): void {
        this.perks = newPerks
    } 
}