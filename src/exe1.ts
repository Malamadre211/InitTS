// Exercice 1 - Les variables

const a = 5;
const b = 1;

if(a > Math.PI) {
    console.log('a est supérieur à PI');
}
else {
    console.log('a est inférieur à PI');
}

if(b > Math.PI) {
    console.log('b est supérieur à PI');
}
else {
    console.log('b est inférieur à PI');
}

const msg = a > b ? 'a est plus grand que b' : 'b est plus grand que a';
console.log(msg);