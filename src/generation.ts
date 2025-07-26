//Générer un code de réservation unique.

const paymentCalculator = new vaVoirLeMonde();

function generateCode(): string {
    return 'RES-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
}

/////////////////////////////////////////////////////////////////

//enregistrer la reserve


function saveReservation(data: any): string {
    const code = generateCode();
    const reservation = {
        code: code,
        ...data,
        date: new Date().toLocaleDateString('fr-FR')
    };
    
    localStorage.setItem(`reservation_${code}`, JSON.stringify(reservation));
    return code;
}

//checher la reserve 1

function findReservation(code: string): any {
    const stored = localStorage.getItem(`reservation_${code.toUpperCase()}`);
    return stored ? JSON.parse(stored) : null;
}


//confirmer la reserve
function showConfirmation(code: string, data: any): void {
    const container = document.querySelector('.card');
    if (!container) return;

///////////////////////////////////////////////
