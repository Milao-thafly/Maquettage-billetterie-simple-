// export class FormStorage{
//     static save(data: any): void {
//     localStorage.setItem("formulaire", JSON.stringify(data))
//     }
//     static load(): any | null {
//         const getform = localStorage.getItem("formulaire");
//         return getform ? JSON.parse(getform): null;
//     }
// }
/*
export function loadFormData(): any | null {
  const getinfo = localStorage.getItem("formulaire");
  return getinfo ? JSON.parse(getinfo) : null;
}

export interface FormData {
    id: string;
    username: string | FormDataEntryValue | null;
    first_name: string | FormDataEntryValue | null;
    email: string | FormDataEntryValue | null;
    age: string | FormDataEntryValue | null;
    phone: string | FormDataEntryValue | null;
    classe: string | FormDataEntryValue | null;
    pays: string | FormDataEntryValue | null;
}


const STORAGE_KEY = 'voyage_reservations';

export function saveFormData(data: FormData): void {
    try {
        const existingReservations = getStoredReservations();
        
        const reservationWithTimestamp = {
            ...data,
            timestamp: new Date().toISOString(),
            status: 'confirmed'
        };
        
        existingReservations[data.id] = reservationWithTimestamp;
        
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existingReservations));
        
        console.log('Données sauvegardées avec succès:', reservationWithTimestamp);
    } catch (error) {
        console.error('Erreur lors de la sauvegarde:', error);
    }
}


export function getStoredReservations(): { [key: string]: any } {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        return {};
    }
}

export function getReservationById(id: string): any | null {
    try {
        const reservations = getStoredReservations();
        return reservations[id] || null;
    } catch (error) {
        console.error('Erreur lors de la recherche:', error);
        return null;
    }
}

/*
export function removeReservation(id: string): boolean {
    try {
        const reservations = getStoredReservations();
        
        if (reservations[id]) {
            delete reservations[id];
            localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
            return true;
        }
        
        return false;
    } catch (error) {
        console.error('Erreur lors de la suppression:', error);
        return false;
    }
}

export function clearAllReservations(): void {
    try {
        localStorage.removeItem(STORAGE_KEY);
        console.log('Toutes les réservations ont été supprimées');
    } catch (error) {
        console.error('Erreur lors de la suppression:', error);
    }
}


type Reservation = {
    classe: string;
    pays: string;
};

export function getReservationStats(): {
    total: number;
    byClass: Record<string, number>;
    byDestination: Record<string, number>;
} {
    try {
        const reservations: Reservation[] = Object.values(getStoredReservations());

        const stats = {
            total: reservations.length,
            byClass: {} as Record<string, number>,
            byDestination: {} as Record<string, number>,
        };

        reservations.forEach((reservation) => {
            const classe = reservation.classe;
            stats.byClass[classe] = (stats.byClass[classe] || 0) + 1;

            const destination = reservation.pays;
            stats.byDestination[destination] = (stats.byDestination[destination] || 0) + 1;
        });

        return stats;
    } catch (error) {
        console.error('Erreur lors du calcul des statistiques:', error);
        return { total: 0, byClass: {}, byDestination: {} };
    }
}
*/
export function saveFormData(data) {
    localStorage.setItem("formulaire", JSON.stringify(data));
}
export function loadFormData() {
    const getinfo = localStorage.getItem("formulaire");
    return getinfo ? JSON.parse(getinfo) : null;
}
