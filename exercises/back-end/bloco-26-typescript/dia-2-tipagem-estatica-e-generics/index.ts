import readline from 'readline-sync';
import { exit } from 'process';
import Months from './exercise1';
import Seasons from './exercise2';

const months = Object.values(Months);

const montChoice = readline.keyInSelect(months, 'Selecione o mês', { cancel: 'Sair' });
if( montChoice === -1 ) {
  console.log('Saindo');
  exit();  
}

const hemisphereNorth = {
  [Months.JANEIRO]: [Seasons.INVERNO],
  [Months.FEVEREIRO]: [Seasons.INVERNO],
  [Months.MARCO]: [Seasons.INVERNO, Seasons.PRIMAVERA],
  [Months.ABRIL]: [Seasons.PRIMAVERA],
  [Months.MAIO]: [Seasons.PRIMAVERA],
  [Months.JUNHO]: [Seasons.PRIMAVERA, Seasons.VERAO],
  [Months.JULHO]: [Seasons.VERAO],
  [Months.AGOSTO]: [Seasons.VERAO],
  [Months.SETEMBRO]: [Seasons.OUTONO, Seasons.VERAO],
  [Months.OUTUBRO]: [Seasons.OUTONO],
  [Months.NOVEMBRO]: [Seasons.OUTONO],
  [Months.DEZEMBRO]: [Seasons.INVERNO, Seasons.OUTONO],
}

const hemisphereSouth = {
  [Months.JANEIRO]: [Seasons.VERAO],
  [Months.FEVEREIRO]: [Seasons.VERAO],
  [Months.MARCO]: [Seasons.OUTONO, Seasons.VERAO],
  [Months.ABRIL]: [Seasons.OUTONO],
  [Months.MAIO]: [Seasons.OUTONO],
  [Months.JUNHO]: [Seasons.OUTONO, Seasons.INVERNO],
  [Months.JULHO]: [Seasons.INVERNO],
  [Months.AGOSTO]: [Seasons.INVERNO],
  [Months.SETEMBRO]: [Seasons.INVERNO, Seasons.PRIMAVERA],
  [Months.OUTUBRO]: [Seasons.PRIMAVERA],
  [Months.NOVEMBRO]: [Seasons.PRIMAVERA],
  [Months.DEZEMBRO]: [Seasons.PRIMAVERA, Seasons.VERAO],
};

const hemispheres = {
  Norte: hemisphereNorth,
  Sul: hemisphereSouth
};

const hemisphereChoice = readline.keyInSelect(Object.keys(hemispheres),
 'Selecione o Hemisfério', {cancel: 'Saindo'});

if(hemisphereChoice === -1) {
  console.log('Saindo');
  exit(); 
}

const month= months[montChoice];
const hemisphere = Object.keys(hemispheres)[hemisphereChoice];

console.log(`Mês: ${month}`);
console.log(`Hemisfério: ${hemisphere}`);

const chosenHemispheres = Object.values(hemispheres)[hemisphereChoice];
const monthAndStations = Object.entries(chosenHemispheres)[montChoice];

const result = monthAndStations[1].join(', ');
console.log(`Estações : ${ result }`);

