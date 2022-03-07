import Employee from './employee';
import Person from './person';
import Subject from './subject';

export default class Teacher extends Person implements Employee {
  private _subject: Subject;

  private _registration: string;

  private _salary: number;

  private _admissionDate: Date;

  constructor(name:string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    this._subject = subject;
    this._salary = salary;
    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
  }

  get subject() {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get registration() {
    return this._registration;
  }

  set registration(value: string) {
    this._registration = value;
  }

  get salary() {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error('O salario não pode ser negativo');
    this._salary = value;
  }

  get admissionDate() {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (new Date().getTime() < value.getTime()) {
      throw new Error('A data de admissão não pode ser uma data futura');
    }
    this._admissionDate = value;
  }

  generateRegistration(): string {
    let registration = '';
    const characteres = '0123456789';
    for (let i = 0; i < 16; i += 1) {
      registration += characteres.charAt(Math.floor(Math.random() * characteres.length));
    }
    return registration;
  }
}
