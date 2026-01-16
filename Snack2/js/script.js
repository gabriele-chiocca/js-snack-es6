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

//Array dove pushare i nomi e falli subiti
const onlynamesandfault = [];

//Per ogni obj nell'array fai ciò:
for (let squadra of campionato) {
  squadra.puntifatti = generaterandom(1, 110);
  squadra.fallisubiti = generaterandom(1, 200);

  onlynamesandfault.push(squadra.nome + ' ' + squadra.fallisubiti);
}

//Funzione genera num
function generaterandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//log
console.log(campionato);
console.log(onlynamesandfault);
