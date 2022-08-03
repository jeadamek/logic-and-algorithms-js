/*
  ** Jogo da adivinhação **
 
  Apresente a mensagem ao usuário:
  "Adivinha o número que estou pensando? Está entre 0 a 10"
 
  Crie uma lógica para gerar um número aleatório e verificar se o número digitado eh o mesmo que o aleatório gerado pelo sistema
 
  Enquanto o usuario nao adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"
 
  Caso o usuário acerte o numero, apresentar a mensagem:
  "Parabéns! Você adivinhou o número em x tentativas"
 
  Substitua o "x" da mensagem, pelo número de tentativas
*/


const randomNumber = Math.round(Math.random() * 10);

let userGuess = prompt("Adivinha o número que estou pensando? Está entre 0 a 10");
const match = Number(userGuess) == randomNumber

let countGuess = 1;

while(Number(userGuess) != randomNumber){
  userGuess = prompt("Erro, tente novamente:");

  countGuess++;
}

alert(`Parabéns! Você adivinhou o número em ${countGuess} ${countGuess == 1 ? "tentativa" : "tentativas"}`);