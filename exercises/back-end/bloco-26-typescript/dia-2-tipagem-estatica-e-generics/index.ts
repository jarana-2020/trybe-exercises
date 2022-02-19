import readline from 'readline-sync';
import { exit } from 'process';
import Months from './exercise1';
import Seasons from './exercise2';
import { BrandColor, Car, Direction, Door } from './exercise4';
import { PizzaCommon } from './PizzaComon';

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
 'Selecione o Hemisfério', {cancel: 'Saindo'});import { Pizza } from './exercise6';
import { PizzaVegetarian } from './PizzaVegetarian';
import { PizzaSugar } from './PizzaSugar';

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

const gol = new Car('Wolkswagem',BrandColor.Prata, 4);
gol.openTheDoor(Door.FrontalEsquerda);
gol.closeTheDoor(Door.FrontalEsquerda);
gol.turnOn();
gol.speedUp();
gol.speedDow();
gol.turn(Direction.Esquerda);
gol.speedUp();
gol.speedDow();
gol.turn(Direction.Direita);
gol.speedUp();
gol.speedDow();
gol.turn(Direction.Direita);
gol.speedUp();
gol.stop();
gol.openTheDoor(Door.TraseiraDireita);
gol.closeTheDoor(Door.TraseiraDireita);
gol.speedUp();
gol.speedDow();
gol.turn(Direction.Direita);
gol.speedUp();
gol.speedDow();
gol.turn(Direction.Esquerda);
gol.speedUp();
gol.speedDow();
gol.turn(Direction.Direita);
gol.speedUp();
gol.stop();
gol.openTheDoor(Door.TraseiraDireita);
gol.closeTheDoor(Door.TraseiraDireita);
gol.speedUp();

const calabresa: PizzaCommon = {
  flavor: 'Calabresa',
  slices: 8
}
console.log(calabresa);

const frango: PizzaCommon = {
  flavor: 'Frango',
  slices: 6
}
console.log(frango);

const pepperoni: PizzaCommon = {
  flavor: 'Pepperoni',
  slices: 6
}
console.log(pepperoni);


const marguerita: PizzaVegetarian = {
  flavor: 'Marguerita',
  slices: 6
}
console.log(marguerita);

const cogumelo: PizzaVegetarian = {
  flavor: 'Cogumelo',
  slices: 8
}
console.log(cogumelo);


const nutela: PizzaSugar = {
  flavor: 'Nutela',
  slices: 4
}
console.log(nutela);



