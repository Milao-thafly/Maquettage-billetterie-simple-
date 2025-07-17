export abstract class AbsctractClass{
    private pays: string;
    private ville: string;
    private prix: number;
    private horraires: number;

    constructor(pays: string, ville: string, prix: number, horraires: number){
        this.pays = pays
        this.ville = ville 
        this.prix = prix
        this.horraires = horraires
    }

    getPays(): string{
        return this.pays
    }

    setPays( newPays: string): void {
        this.pays = newPays
    } 

    getVille(): string{
        return this.ville
    }

    setVille( newVille: string): void {
        this.ville = newVille
    } 

    getPrix(): number{
        return this.prix
    }

    setPrix( newPrix: number): void {
        this.prix = newPrix
    } 

    getHorraires(): number{
        return this.horraires
    }

    setHorraires( newHorraires: number): void {
        this.horraires = newHorraires
    } 
}