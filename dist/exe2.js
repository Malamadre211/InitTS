"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decouverte_typescript_exe2 = void 0;
const decouverte_typescript_exe2 = () => {
    // Exercice 2 - Les tableaux
    // Dichiaro la tab
    let tab = [];
    // Do un valore a index
    let index = 0;
    // Se invece il valore é minore di 10, aggiungo +1 ad index, quindi index diventa 0+1
    while (index < 10) {
        tab[index] = index + 1;
        index = index + 1;
    }
    console.log("Tab", tab);
    console.log("Lenght tab", tab.length);
    console.log("First element", tab[0]);
    console.log("last element", tab[tab.length - 1]);
    console.log("four element", tab[3]);
    let tab2 = [];
    for (let index = 0; index < tab.length; index++) {
        const element = tab[index];
        tab2[index] = element;
    }
    console.log("tab tab", tab2);
};
exports.decouverte_typescript_exe2 = decouverte_typescript_exe2;
