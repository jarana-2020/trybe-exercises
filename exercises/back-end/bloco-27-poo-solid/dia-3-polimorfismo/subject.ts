export default class Subject {
  private _name: string = String();

  constructor(name: string) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  private validateName(value: string) {
    if (value.length < 3) throw new Error('O nome deve ter ao menos três caracteres');
  }
}