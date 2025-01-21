const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
const numeri = numbers.map((somma)=>{
    return somma + 1;
})
console.log(numeri);

// Risultato: [3, 9, 5, 8, 3, 88]


// versione compata
console.log('versione compata');

const numeri2 = numbers.map(somma=>somma + 1)
console.log(numeri2);


// versione con for
console.log('versione con FOR');

let sommaNumeri = [];

for (let i = 0; i < numbers.length; i++){
    sommaNumeri.push(numbers[i] + 1)
}
console.log(sommaNumeri);

