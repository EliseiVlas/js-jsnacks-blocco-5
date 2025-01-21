const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
const pari = nums.filter((numeri)=> {
    if(numeri % 2 ===0){
        return true;
    }
    return false;
})
console.log(pari);

// Risultato: [2, 8, 4, 12]