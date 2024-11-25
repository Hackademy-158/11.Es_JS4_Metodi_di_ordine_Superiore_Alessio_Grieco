// ! Esercizio 2 :

// ^ Dichiaro l'esistenza di una funzione Decrescente
function Palindroma(str) {
    // ^ Rimuove spazi, punteggiatura, converte in minuscolo e inverte la stringa
    let modStr = str.replace(/\W/g, '').toLowerCase();

    // ^ Confronta la stringa modificata (grazie alla stretta ugualianza) con la sua versione invertita
    return modStr === modStr.split('').reverse().join('');
}

console.log(Palindroma("i topi non avevano nipoti")); 