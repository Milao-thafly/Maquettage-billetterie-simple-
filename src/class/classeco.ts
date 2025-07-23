import { AbsctractClass } from "./classAbstract.js";

export class ClassEco extends AbsctractClass {
  constructor() {
    super(ClassEco.label, ClassEco.value, ClassEco.prix, ClassEco.perks);
  }

  private static readonly LABEL = "ECO";
  private static readonly VALUE = "ECO";
  private static readonly PRIX = 0.1;
  private static readonly PERKS = "CHAUFFERU";

  // Getters estáticos
  static get label(): string {
    return this.LABEL;
  }

  static get value(): string {
    return this.VALUE;
  }

  static get prix(): number {
    return this.PRIX;
  }

  static get perks(): string {
    return this.PERKS;
  }
}
