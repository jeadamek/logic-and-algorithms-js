/*
  Capturar 2 numeros
  e fazer as operacoes matematicas
  de soma, subtracao, multiplicaco, 
  divisao e resto da divisao
*/

let numberOne = prompt("Digite o primeiro numero: ")
let numberTwo = prompt("Digite o segundo numero: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert("Soma: " + sum)
alert("Subtracao: " + sub)
alert("Multiplicacao: " + multi)
alert("Divisao: " + div)
alert("Resto da divisao: " + restDiv)