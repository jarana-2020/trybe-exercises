import Client from './client';
import OrderItem from './item-order';

class Order {
  private _client: Client;

  private _items: OrderItem[];

  private _typePayment: string;

  private _discount: number;

  constructor(client: Client, items: OrderItem[], typePayment: string, discount: number) {
    this._client = client;
    this._typePayment = typePayment;
    this._items = items;
    this._discount = discount;
  }

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    if (!this._client) throw new Error('O nome do cliente deve ser informado');
    this._client = value;
  }

  get typePayment(): string {
    return this._typePayment;
  }

  set typePayment(value: string) {
    this._typePayment = value;
  }

  get items():OrderItem[] {
    return this.items;
  }

  set items(values: OrderItem[]) {
    if (this._items.length === 0) throw new Error('Deve ser informado ao menos um item');
    this._items = values;
  }

  get discount():number {
    return this.discount;
  }

  set discount(value: number) {
    if (this._discount < 0) throw new Error('O desconto deve ser um numero positivo');
    this._discount = value;
  }

  totalOrder(): number {
    const total = this._items.reduce((previousValue, { price }) => {
      price += previousValue;
      return price;
    }, 0);
    return total;
  }

  totalOrderWithDiscount(): number {
    const total = this.totalOrder();
    const totalDiscount = total * this._discount;
    const subTotal = total - totalDiscount;
    return subTotal;
  }
}

const client1 = new Client('Doraci');
const coke = new OrderItem('coke', 5.00);
const dog = new OrderItem('dog', 15.00);
const order = new Order(client1, [coke, dog], 'dinheiro', 0.1);
console.log(order);
console.log(`Total Order: ${order.totalOrder()}`);
console.log(`Sub Total: ${order.totalOrderWithDiscount()}`);
