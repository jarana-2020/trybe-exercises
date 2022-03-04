class OrderItem {
  private _itemName: string;

  private _price: number;

  constructor(name: string, price: number) {
    this._itemName = name;
    this._price = price;
  }

  get itemName(): string {
    return this._itemName;
  }

  set itemName(value: string) {
    this._itemName = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (this._price < 0) throw new Error('O preço deve ser positivo');
    this._price = value;
  }
}

export default OrderItem;
