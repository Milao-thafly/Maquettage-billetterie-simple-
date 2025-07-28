import { allClasses } from "./classTrip.js";
export class vaVoirLeMonde {
    payFromDistance(classValue, distance) {
        const selectedClass = allClasses.find(allClasses => allClasses.getValue() === classValue);
        const totalQuiFaitMal = selectedClass.getPrix() * distance;
        return totalQuiFaitMal;
    }
}
const voyageVOYAGE = new vaVoirLeMonde();
