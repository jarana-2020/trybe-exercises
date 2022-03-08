export default abstract class Person {
  private _name: string = String();

  private _birthDate: Date = new Date();

  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }

  get name() : string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  get age(): number {
    let totalAge = new Date().getFullYear() - this._birthDate.getFullYear();
    if (new Date().getMonth() < this._birthDate.getMonth()) totalAge -= 1;
    return totalAge;
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
    if (new Date().getFullYear() - value.getFullYear() > 120) {
      throw new Error('A pessoa não pode ter mais de 120 anos');
    }
  }
}
