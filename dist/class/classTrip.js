var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ClassTrip_label, _ClassTrip_value, _ClassTrip_prix, _ClassTrip_perks;
export class ClassTrip {
    constructor(label, value, prix, perks) {
        _ClassTrip_label.set(this, void 0);
        _ClassTrip_value.set(this, void 0);
        _ClassTrip_prix.set(this, void 0);
        _ClassTrip_perks.set(this, void 0);
        __classPrivateFieldSet(this, _ClassTrip_label, label, "f");
        __classPrivateFieldSet(this, _ClassTrip_value, value, "f");
        __classPrivateFieldSet(this, _ClassTrip_prix, prix, "f");
        __classPrivateFieldSet(this, _ClassTrip_perks, perks, "f");
    }
    getLabel() {
        return __classPrivateFieldGet(this, _ClassTrip_label, "f");
    }
    getValue() {
        return __classPrivateFieldGet(this, _ClassTrip_value, "f");
    }
    getPrix() {
        return __classPrivateFieldGet(this, _ClassTrip_prix, "f");
    }
    getPerks() {
        return __classPrivateFieldGet(this, _ClassTrip_perks, "f");
    }
}
_ClassTrip_label = new WeakMap(), _ClassTrip_value = new WeakMap(), _ClassTrip_prix = new WeakMap(), _ClassTrip_perks = new WeakMap();
const classEco = new ClassTrip("eco", "eco", 0.1, "Siège a côté de la fenetre en cas de crash t'est le premier.");
const classMedium = new ClassTrip("Medium", "Medium", 0.25, "Un siège normal pour une personne normal");
const classRiche = new ClassTrip("Riche", "Riche", 0.5, "Tout ce que vous voudrez my looord");
export const allClasses = [classEco, classMedium, classRiche];
