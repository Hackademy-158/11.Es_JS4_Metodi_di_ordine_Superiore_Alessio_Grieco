//! Esercizio 1 :

// ^ Dichiaro l'esistenza di una var di tipo array
let numarr = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

// ^ Dichiaro l'esistenza di una funzione Decrescente
function arrDecrescente(array) {
    return array.sort((a, b) => b - a)
}

// ^ Dichiaro l'esistenza di una funzione Crescente
function arrCrescente(array) {
    return array.sort((a, b) => a - b)
}

// ^ Stampo i due risultati dei result di ciascuna funzione
console.log(arrDecrescente(numarr));
console.log(arrCrescente(numarr));