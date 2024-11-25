// //! Esercizio 1 :

// //^Dichiaro l'esistenza di una var che è array

// let numarr = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

// //?Dichiaro l'esistenza di una funzione Decrescente
// function arrDecrescente(array) {
//     return array.sort((a, b) => b - a)
// }

// //?Dichiaro l'esistenza di una funzione Crescente
// function arrCrescente(array) {
//     return array.sort((a, b) => a - b)
// }

// // ^Stampo i due risultati dei result
// console.log(arrDecrescente(numarr));
// console.log(arrCrescente(numarr));


// ! Esercizio 2 :

// function Palindroma(str) {
//     //? Rimuove spazi, punteggiatura, converte in minuscolo e inverte la stringa
//     let modStr = str.replace(/\W/g, '').toLowerCase();

//     //? Confronta la stringa modificata (grazie alla stretta ugualianza) con la sua versione invertita
//     return modStr === modStr.split('').reverse().join('');
// }

// console.log(Palindroma("i topi non avevano nipoti")); 

// ! Esercizio 3 :

// //^ Dichiaro i due array di numeri casuali
// let arr1 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1);
// let arr2 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1);

// //^ Dichiaro l' esistenza dell'array per i risultati
// let resArray = [];

// //? Chiedo all'utente che opzione scegliere
// let op = prompt("Scegli un'operazione: addizione, sottrazione, moltiplicazione, divisione");

// for (let i = 0; i < arr1.length; i++) {
//     switch (op) {
//         case 'addizione':
//             resArray.push(arr1[i] + arr2[i]);
//             break;
//         case 'sottrazione':
//             resArray.push(arr1[i] - arr2[i]);
//             break;
//         case 'moltiplicazione':
//             resArray.push(arr1[i] * arr2[i]);
//             break;
//         case 'divisione':
//             if (arr2[i] !== 0) {
//                 resultArray.push(arr1[i] / arr2[i]);
//             } else {
//                 resultArray.push('Infinito');
//             }
//             break;
//         default:
//             console.log("Operazione non valida");
//             break;
//     }
// }

// console.log(resArray);


// !Esercizio 4 : 

// //Stampa anche quanti sono i valori minori della media e quanti quelli maggiori. 

// let numbers = [3, 5, 10, 2, 8, 6, 7, 9];
// function media(array){
// let media = array.reduce((accumulator, currentValue) => accumulator + currentValue) / array.length;
//     let filtered = array.filter((num)=>num<media)
//     return "la media è:" + " " + media + " " + "i valori minori sono:" + " " + filtered;
// }
// console.log (media(numbers))


// !Esercizio 5 :

// let numbers = [10, 20, 30, 40];


// function somma (array){
//     return array.reduce((accumulator, currentValue) => accumulator + currentValue)
// }
// console.log (somma(numbers))