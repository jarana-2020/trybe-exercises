export default class Person {
  private _name: string;

  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  get name() : string {
    return this.name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  get age(): number {
    return new Date().getFullYear() - this._birthDate.getFullYear();
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.validateAge(value);
    this._birthDate = value;
  }

  private validateName(value: string) {
    if (value.length < 3) throw new Error('O nome deve ter ao menos três caracteres');
  }

  private validateAge(value: Date) {
    if (new Date().getTime() < value.getTime()) {
      throw new Error('A data de aniversario não pode ser uma data futura');
    }
    if (this.age > 120) throw new Error('A pessoa não pode ter mais de 120 anos');
  }
}
const birthDate1 = new Date('1900-05-13');
const person1 = new Person('Ju', birthDate1);
console.log(person1);
