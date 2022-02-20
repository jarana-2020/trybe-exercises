
export enum BrandColor {
  Preta = 'Preto',
  Prata = 'Prata',
  Branco = 'Branco',
  Vermelho = 'Vermelho'
}

 export enum Door {
  FrontalEsquerda = 'Porta Frontal Esquerda',
  FrontalDireita = 'Porta Frontal Direita',
  TraseiraEsquerda = 'Porta Traseira Esquerda',
  TraseiraDireita = 'Porta Traseira Direita',
}

export enum Direction {
  Esquerda = 'Esquerda',
  Direita = 'Direita',
}

export class Car {
  _brand: string;
  _color: BrandColor;
  _doors: number;

  constructor(brand : string, color: BrandColor, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  }

  honk(): void {
    console.log('Buzina acionada');
  }

  openTheDoor(door: Door): void {
    console.log(`Abrindo a porta ${door}`);
  }

  closeTheDoor(door: Door): void {
    console.log(`Fechando a porta ${door}`);
  }

  turnOn(): void {
    console.log('Liga o carro');
  }

  turnOff(): void {
    console.log('Desliga o carro');
  }

  speedUp(): void {
    console.log('Acelera o carro');
  }

  speedDow(): void {
    console.log('Desacelera o carro');
  }

  stop(): void {
    console.log('Para o carro');
  }
  
  turn(direction: Direction): void {
    console.log(`Vira para a ${direction}`);
  }
};