import Employee from "./employee";
import Subject from "./subject";

export default class Teacher extends Employee {
  private _subject: Subject;

  constructor(name:string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate,salary);
    this._subject = subject;
    this.enrollment = this.generateEnrollment();
  }

  get subject() {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  // generateRegistration(): string {
  //   let registration = '';
  //   const characteres = '0123456789';
  //   for (let i = 0; i < 16; i += 1) {
  //     registration += characteres.charAt(Math.floor(Math.random() * characteres.length));
  //   }
  //   return registration;
  // }
}