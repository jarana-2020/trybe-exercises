import OrderItem from "./orderItem";
import Person from "./person";

export default class Order {
  private _id: string = String();
  private _createdAt: Date; 
  private _client: Person;
  private _items: OrderItem[] = [];
  private _paymentMethod: string = String();
  private _discount: number = 0;

  constructor(client: Person,items: OrderItem[],paymentMethod: string, discount?: number) {
    this._client = client;
    this.items = items;
    this.paymentMethod = paymentMethod;
    this._id = this.generateId();
    this._createdAt = new Date();

    if(discount) this.discount = discount;
  }

  get id() {
    return this._id;
  }

  get createdAt() {
    return this._createdAt;
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

  generateId() {
    const characteres = '0123456789';
    let id = '';
    for(let i = 0; i < 8; i += 1) {
      id += characteres.charAt(Math.floor(Math.random() * characteres.length)) ;
    }
    return id;
  }
}