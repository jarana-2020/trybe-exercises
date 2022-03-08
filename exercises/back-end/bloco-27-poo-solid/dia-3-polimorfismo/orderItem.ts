export default class OrderItem {
  private _name: string = String();
  private _price: number = Number();

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  get name() {
    return this._name
  }

  set name(value: string) {
    if(value.length < 3) throw new Error('O nome deve ter ao menos 3 caracteres');
    this._name = value;
  }

  get price() {
    return this._price
  }

  set price(value: number) {
    if(value < 0) throw new Error('O preço deve ser um valor positivo');
    this._price = value;
  }
}