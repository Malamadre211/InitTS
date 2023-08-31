"use strict";
// Exercice 1 - Les variables
Object.defineProperty(exports, "__esModule", { value: true });
exports.decouverte_typescript_exe1 = void 0;
const decouverte_typescript_exe1 = () => {
    const a = 5;
    const b = 1;
    if (a > Math.PI) {
        console.log('a supérieur à PI');
    }
    else {
        console.log('a inférieur à PI');
    }
    if (b > Math.PI) {
        console.log('b supérieur à PI');
    }
    else {
        console.log('b inférieur à PI');
    }
    const msg = a > b ? 'a plus grand que b' : 'b plus grand que a';
    console.log(msg);
};
exports.decouverte_typescript_exe1 = decouverte_typescript_exe1;
