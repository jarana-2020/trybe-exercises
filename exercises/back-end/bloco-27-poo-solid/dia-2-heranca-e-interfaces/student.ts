/* eslint-disable no-param-reassign */
import Person from './person';

class Student extends Person {
  private _enrollment: string;

  private _examGrades: number[];

  private _workGrades: number[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    this._examGrades = [];
    this._workGrades = [];
  }

  get enrollment() {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('O matricula deve ter 16 caracteres');
    this._enrollment = value;
  }

  get examGrades() {
    return this._examGrades;
  }

  set examGrades(values: number[]) {
    if (values.length > 4) throw new Error('O número maximo de notas é 4');
    this._examGrades = values;
  }

  get workGrades() {
    return this._workGrades;
  }

  set workGrades(values: number[]) {
    if (values.length > 2) throw new Error('O número maximo de notas de trabalho é 2');
    this._workGrades = values;
  }

  sumNotes(): number {
    const result = [...this._examGrades, ...this._workGrades]
      .reduce((previousValue, current) => {
        current += previousValue;
        return current;
      }, 0);
    return result;
  }

  sumAverageNotes(): number {
    const notes = this.sumNotes();
    const divisorNotes = this.examGrades.length + this.workGrades.length;
    return notes / divisorNotes;
  }

  private generateEnrollment(): string {
    let enrollment = '';
    const characteres = '0123456789';
    for (let i = 0; i < 16; i += 1) {
      enrollment += characteres.charAt(Math.floor(Math.random() * characteres.length));
    }
    return enrollment;
  }
}

const student1 = new Student('julio', new Date('1982-05-13'));
console.log(student1);
student1.examGrades = [10, 20, 30, 40, 62];
