/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno
 
  Se o aluno passou no bimestre, dar os parabéns
 
  Se o aluno não passou no bimestre,
  motivar o aluno a dar seu melhor na prova de recuperação
 
  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota

*/

let studentName = prompt("Nome do(a) aluno: ");
let gradeOne = prompt("Nota da primeira prova:");
let gradeTwo = prompt("Nota da segunda prova:");
let gradeThree = prompt("Nota da terceira prova:");

gradeOne = Number(gradeOne);
gradeTwo = Number(gradeTwo);
gradeThree = Number(gradeThree);

let average = (gradeOne + gradeTwo + gradeThree) / 3;

let result = average > 6

average = average.toFixed(1)

if (result){
  alert("Parabéns, " + studentName + "! Sua média foi de: " + average);
} else if(average < 3) {
  alert("Reprovado!")
} else {
  alert(studentName + " estude para sua prova de recuperação! Sua média foi de " + average)
}