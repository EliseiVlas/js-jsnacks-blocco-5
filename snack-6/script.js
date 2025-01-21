const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

const zucchinePiuLunghe = zucchine.filter((lunghezza)=>{
  return lunghezza.length > 15;
})
console.log(zucchinePiuLunghe);


const zucchinePiuCorte = zucchine.filter((lunghezza2)=>{
  return lunghezza2.length <= 15;
})
console.log(zucchinePiuCorte);


// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

// versione compata
console.log('versione compata');

const zucchinePiuLunghe2 = zucchine.filter(lunghezza3=>lunghezza3.length > 15)
console.log(zucchinePiuLunghe2);


const zucchinePiuCorte2 = zucchine.filter(lunghezza4=>lunghezza4.length <= 15)
console.log(zucchinePiuCorte2);


// versione con FOR
console.log('versione con FOR');

let zucchinePiuLunghe3 = []
let zucchinePiuCorte3 = []

for(let i = 0; i < zucchine.length; i++){
  if(zucchine[i].length > 15){
    zucchinePiuLunghe3.push(zucchine[i])
  }else{
    zucchinePiuCorte3.push(zucchine[i])
  }
}
console.log(zucchinePiuLunghe3);
console.log(zucchinePiuCorte3);


