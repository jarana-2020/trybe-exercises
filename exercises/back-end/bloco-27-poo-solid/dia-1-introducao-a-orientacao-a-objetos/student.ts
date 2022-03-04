class Student {
  name: string;

  private _registration: string;

  private _examGrades: number[];

  private _examWorks: number[];

  constructor(
    name: string,
    registration: string,
  ) {
    this.name = name;
    this._registration = registration;
    this._examGrades = [];
    this._examWorks = [];
  }

  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    this._registration = value;
  }

  get examGrades(): number[] {
    return this._examGrades;
  }

  set examGrades(value: number[]) {
    if (value.length > 4) throw new Error('O estudante deve ter apenas 4 notas');
    this._examGrades = value;
  }

  get examWorks(): number[] {
    return this._examWorks;
  }

  set examWorks(value: number[]) {
    if (value.length > 2) throw new Error('O estudante deve ter apenas 2 notas de trabalho');
    this._examWorks = value;
  }

  calcGrades(): number {
    const sumGrades = [...this._examGrades, ...this._examWorks].reduce((ac, grade) => {
      ac += grade;
      return ac;
    }, 0);
    return sumGrades;
  }

  averageGrades() {
    const divider = this._examGrades.length + this.examWorks.length;
    const sumGrades = this.calcGrades();
    return Math.round(sumGrades / divider);
  }
}

const student1 = new Student('Julio', '1102020');
student1.examGrades = [10, 20, 40, 50, 60];
student1.examWorks = [10, 20];
console.log(student1);
