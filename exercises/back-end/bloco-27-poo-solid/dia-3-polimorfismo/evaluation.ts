import Teacher from "./teacher";

export default abstract class Evaluation {
  private _score: number = Number();
  private _teacher: Teacher;

  constructor(score: number, teacher: Teacher) {
    this.score = score;
    this._teacher = teacher;
  }

  get score() {
    return this._score;
  }

  set score(value: number) {
    if(value < 0) throw new Error('O score deve ser positivo')
    this._score = value;
  }

  get teacher() {
    return this._teacher;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }
}