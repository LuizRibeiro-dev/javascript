const leia = require("readline-sync");

let salario, abono; 

salario = leia.questionFloat("\nDigite seu salario: ");
console.clear()

abono = leia.questionFloat("\nDigite o abono: ");
console.clear()

{atualizado = salario + abono
}

console.log("\nSeu salario atualizado é: " + atualizado);