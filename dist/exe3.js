"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decouverte_typescript_exe3 = void 0;
const decouverte_typescript_exe3 = () => {
    // Exercice 3
    /*
    800kg de foin.
    2 moutons
    500g foin/J.
    gigot 1000 jours.
    Combien de temps le stock de foin va-t-il durer ?
    
    MÃªme exercice si le stock est de 20 kg
    MÃªme exercice si le nombre de mouton est de 5. */
    console.log("Pour 2 moutons et 800Kg foin le stock dure : ", nombreJourTotal(800, 2), " jour.");
    console.log("Pour 2 moutons et 20g foin le stock dure : ", nombreJourTotal(800, 2), " jour.");
    console.log("Pour 5 moutons et 800Kg foin le stock dure : ", nombreJourTotal(800, 2), " jour.");
    const consommationMoutonJournalier = 0.25;
    const dayBeforeDead = 1000;
    function nombreJourTotal(kgFoin, nombreMouton) {
        let nombreJour = 0;
    }
};
exports.decouverte_typescript_exe3 = decouverte_typescript_exe3;
