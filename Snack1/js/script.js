//Bonus farle con filter, map, reduce

const bikes = [
  { nome: 'Montains', peso: 290 },
  { nome: 'Gioins', peso: 110 },
  { nome: 'Sarti', peso: 90 },
  { nome: 'Clinsi', peso: 170 },
  { nome: 'Gioice', peso: 320 },
  { nome: 'Crocs', peso: 280 },
  { nome: 'Crains', peso: 130 },
  { nome: 'Scisyl', peso: 160 },
];

let biciminore = bikes[0].peso;

//Function classica
/*
function minorps(bike) {
  for (let i = 0; i < bike.length; i++) {
    if (biciminore > bike[i].peso) {
      biciminore = bike[i].peso;
    }
  }
} */

//Con il for of
for (let bici of bikes) {
  if (biciminore > bici.peso) {
    biciminore = bici.peso;
  }
}

//Reduce

// minorps(bikes);
console.log(biciminore);
