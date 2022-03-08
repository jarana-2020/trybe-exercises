import Evaluation from "./evaluation";
import Teacher from "./teacher";

export default class Exam extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score,teacher);
  }

 set score(value: number) {
  if(value > 25) throw new Error('A nota não pode ser maior que 25')
  super.score = value;
 }
} 