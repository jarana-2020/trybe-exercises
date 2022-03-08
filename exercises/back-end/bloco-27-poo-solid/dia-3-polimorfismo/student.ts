import Enrollment from "./enrollable";
import EvaluationResult from "./evaluationResult";
import Person from "./person";

export default class Student extends Person implements Enrollment {
  private _enrollment: string = String();
  private _evaluationResult: EvaluationResult[];


  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
    this._evaluationResult = [];
  }

  get enrollment() {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('O matricula deve ter 16 caracteres');
    this._enrollment = value;
  }

  get evaluationResult(): EvaluationResult[] {
    return this._evaluationResult;
  }


  sumNotes(): number {
    const result = [...this._evaluationResult]
      .reduce((previous, note) => note.score + previous, 0 );
    return result
  }

  sumAverageNotes(): number {
    const notes = this.sumNotes();
    const divisorNotes = this.evaluationResult.length;
    return notes / divisorNotes;
  }

 generateEnrollment(): string {
    let enrollment = '';
    const characteres = '0123456789';
    for (let i = 0; i < 16; i += 1) {
      enrollment += characteres.charAt(Math.floor(Math.random() * characteres.length));
    }
    return enrollment;
  }

  addEvaluationResult(value: EvaluationResult) {
    this._evaluationResult.push(value)
  }
}

