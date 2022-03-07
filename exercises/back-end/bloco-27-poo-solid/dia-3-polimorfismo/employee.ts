import Enrollment from "./enrollable";
import Person from "./person";

export default class Employee extends Person implements Enrollment {
  private _salary: number = Number();
  private _admissionDate: Date;
  private _enrollment: string = String();

  constructor(name: string, birthDate: Date, salary: number){
    super(name,birthDate);
    this.salary = salary;
    this._admissionDate = new Date();
    this.enrollment = this.generateEnrollment();
  }

  get enrollment() : string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if(value.length < 16) throw new Error('A matricula deve ter ao menos 16 caracteres');
    this._enrollment = value;
  }

  get salary() {
    return this._salary;
  }

  set salary(value: number) {
    if(value < 0) throw new Error('O salario deve ser positivo');
    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
}

set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
        throw new Error('A data de admissão não pode ser uma data no futuro.');
    }

    this._admissionDate = value;
}

 generateEnrollment() {
    let enrollment = '';
    const characteres = '0123456789';
    for (let i = 0; i < 16; i += 1) {
      enrollment += characteres.charAt(Math.floor(Math.random() * characteres.length));
    }
    return enrollment;
  }
}
