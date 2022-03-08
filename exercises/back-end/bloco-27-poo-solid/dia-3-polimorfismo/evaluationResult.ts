import Evaluation from "./evaluation";

export default class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number = Number();

  constructor(evaluation: Evaluation, score: number) {
    this._evaluation = evaluation;
    this.score = score;
  }

  get evaluation() {
    return this._evaluation
  }

  set evaluation(value: Evaluation) {
    this._evaluation = value;
  }

  get score() {
    return this._score
  }

  set score(value: number) {
    if(value < 0) throw new Error('O score deve ser positivo')
    if(value > this.evaluation.score) throw new Error('O score não deve ser maior que a nota da avaliação')
    this._score = value;
  }

}