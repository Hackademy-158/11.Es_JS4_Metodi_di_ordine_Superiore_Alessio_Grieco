
// ! Esercizio 3 :

//^ Dichiaro i due array di numeri casuali
let arr1 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1);
let arr2 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1);

//^ Dichiaro l' esistenza dell'array per i risultati
let resArray = [];

//? Chiedo all'utente che opzione scegliere
let op = prompt("Scegli un'operazione: Addizione, Sottrazione, Moltiplicazione, Divisione");

for (let i = 0; i < arr1.length; i++) {
    switch (op) {
        case 'Addizione':
            resArray.push(arr1[i] + arr2[i]);
            break;
        case 'Sottrazione':
            resArray.push(arr1[i] - arr2[i]);
            break;
        case 'Moltiplicazione':
            resArray.push(arr1[i] * arr2[i]);
            break;
        case 'Divisione':
            if (arr2[i] !== 0) {
                resultArray.push(arr1[i] / arr2[i]);
            } else {
                resultArray.push('Infinito');
            }
            break;
        default:
            console.log("Operazione non valida");
            break;
    }
}

console.log(resArray);


