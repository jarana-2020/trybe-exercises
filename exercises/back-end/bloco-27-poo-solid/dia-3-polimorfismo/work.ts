import Evaluation from "./evaluation";
import Teacher from "./teacher";

export default class Work extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score,teacher);
  }

  set score(value: number) {
    if(value > 50) throw new Error('A nota não pode ser maior que 50');
    super.score = value;
  }
}