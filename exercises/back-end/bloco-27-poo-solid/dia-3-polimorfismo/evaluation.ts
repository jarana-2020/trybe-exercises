import Teacher from "./teacher";

export default class Evaluation {
  private _score: number = Number();
  private _teacher: Teacher;
  private _type: string = String();

  constructor(score: number, teacher: Teacher, type: string) {
    this.score = score;
    this._teacher = teacher;
    this.type = type;
  }

  get score() {
    return this._score;
  }

  set score(value: number) {
    if(value < 0) throw new Error('O score deve ser positivo')
    if(this._type === 'prova' && value > 25) throw new Error('A nota de prova não pode ser maior que 25');
    if(this._type === 'trabalho' && value > 50) throw new Error('A nota do trabalho não pode ser maior que 50');
    this._score = value;
  }

  get teacher() {
    return this._teacher;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }

  get type() {
    return this._type;
  }

  set type(value: string) {
    if(value !== 'prova' && value !== 'trabalho') {
      throw new Error('O tipo da avaliação deve ser prova ou trabalho')
    } 
    this._type = value;
  }
}