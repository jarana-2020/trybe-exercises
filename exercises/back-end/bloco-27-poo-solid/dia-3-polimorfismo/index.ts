import EvaluationResult from "./evaluationResult";
import Exam from "./exam";
import Student from "./student";
import Subject from "./subject";
import Teacher from "./teacher";
import Work from "./work";

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
// console.log(carolina);
// console.log(lucas);

const math = new Subject('Matemática');
const history = new Subject('História');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
// console.log(marta);
// console.log(joao);

const exam1 = new Exam(25,marta);
const work1 = new Work(50,marta);
const exam2 = new Exam(20,joao);
const work2 = new Work(40,joao);
carolina.addEvaluationResult(new EvaluationResult(exam1, 10));
carolina.addEvaluationResult(new EvaluationResult(work1, 40));
lucas.addEvaluationResult(new EvaluationResult(exam2, 15));
lucas.addEvaluationResult(new EvaluationResult(work2, 35));

console.log('Avaliações:',carolina.evaluationResult);
console.log('Soma das notas: ', carolina.sumNotes());
console.log('Média das notas: ', carolina.sumAverageNotes());

