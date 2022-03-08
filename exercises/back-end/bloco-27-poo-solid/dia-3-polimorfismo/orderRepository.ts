import Order from "./order";
import Person from "./person";

export default class OrderRepository {
  private _orders: Order[] = [];

  addOrder(value: Order) {
    this._orders.push(value);
  }

  removeOrder(value: Order) {
    const ordersFiltered =  this._orders.filter((order) => order.id !== value.id);
    this._orders = ordersFiltered;
  }

  listByClient(client: Person) {
    return this._orders.filter((order) => order.client.name === client.name);
    
  }

  listBySortedValue(orderType: string,) {
    if(!['maior','menor'].includes(orderType)) throw new Error ('O tipo de ordenação deve ser maior ou menor');
    if(orderType === 'maior') {
      return this._orders.sort((orderA,orderB) => {
        return orderB.calculateTotalWithDiscount() - orderA.calculateTotalWithDiscount();
      })
    } else {
      return this._orders.sort((orderA,orderB) => {
        return orderA.calculateTotalWithDiscount() - orderB.calculateTotalWithDiscount();
      })
    }
  }
}