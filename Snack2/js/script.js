const campionato = [
  { nome: 'Napoli', puntifatti: 0, fallisubiti: 0 },
  { nome: 'Juventus', puntifatti: 0, fallisubiti: 0 },
  { nome: 'Roma', puntifatti: 0, fallisubiti: 0 },
  { nome: 'Milan', puntifatti: 0, fallisubiti: 0 },
  { nome: 'Lazio', puntifatti: 0, fallisubiti: 0 },
  { nome: 'Atalanta', puntifatti: 0, fallisubiti: 0 },
  { nome: 'Como', puntifatti: 0, fallisubiti: 0 },
  { nome: 'Parma', puntifatti: 0, fallisubiti: 0 },
];

const onlynamesandfault = [];

for (let squadra of campionato) {
  squadra.puntifatti = generaterandom(1, 110);
  squadra.fallisubiti = generaterandom(1, 200);

  onlynamesandfault.push(squadra.nome + ' ' + squadra.fallisubiti);
}

function generaterandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(campionato);
console.log(onlynamesandfault);
