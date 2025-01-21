const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori

const autori = posts.map((nomi) => {
  return nomi.author;
}) 
console.log(autori);

// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

// versione comapata
const autori2 = posts.map(nomi => nomi.author) 
console.log(autori2);