const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi

people.forEach((nomi) => {
  console.log(nomi.name);
  
})
// Risultato: 'Paolo', 'Giulia', 'Marco'

// versione compata
people.forEach(nomi=>console.log(nomi.name))