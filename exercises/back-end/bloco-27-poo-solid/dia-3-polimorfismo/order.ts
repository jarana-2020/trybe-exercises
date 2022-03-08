import OrderItem from "./orderItem";
import Person from "./person";

export default class Order {
  private _client: Person;
  private _items: OrderItem[] = [];
  private _paymentMethod: string = String();
  private _discount: number = 0;

  constructor(client: Person,items: OrderItem[],paymentMethod: string, discount?: number) {
    this._client = client;
    this.items = items;
    this.paymentMethod = paymentMethod;

    if(discount) this.discount = discount;
  }

  get client() {
    return this._client;
  }

  set client(value: Person) {
    this._client = value;
  }

  get items() {
    return this._items;
  }

  set items(values: OrderItem[]) {
    if(!values.length) throw new Error('O pedido deve ter ao menos um item');
    this._items = values;
  }

  get paymentMethod() {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    if(!['dinheiro','cartão', 'vale'].includes(value)) {
      throw new Error('O pagamento deve ser dinheiro, cartão ou vale');
    }
    this._paymentMethod = value;
  }

  get discount() {
    return this._discount;
  }

  set discount(value: number) {
    if(value < 0) throw new Error('O desconto deve ser um numero positivo');
    this._discount = value;
  }

  calculateTotal() {
    return [...this._items].reduce((pValue, item) => {
      pValue += item.price
      return pValue
    }, 0)
  }
  calculateTotalWithDiscount() {
    const totalWithoutDiscount = this.calculateTotal();
    return totalWithoutDiscount * (1 - this._discount);
  }
}