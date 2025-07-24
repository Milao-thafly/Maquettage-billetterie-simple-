export class ClassTrip{
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

    getValue(): string{
        return this.value
    }

    getPrix(): number{
        return this.prix
    }


    getPerks(): string{
        return this.perks
    }

 
}

const classEco = new ClassTrip("eco",  "eco", 0.1, "Siège a côté de la fenetre en cas de crash t'est le premier." );

const classMedium = new ClassTrip("Medium",  "Medium", 0.25, "Un siège normal pour une personne normal" );

const classRiche = new ClassTrip("Riche",  "Riche", 0.5, "Tout ce que vous voudrez my looord" );