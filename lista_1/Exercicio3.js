const leia = require("readline-sync");

let bruto, noturno, extras, descontos, liquido; 

console.clear()
bruto = leia.questionFloat("\nDigite seu salario bruto: ", {limitMessage: '\nPor favor! Digite somente o valor do salario bruto'});
console.clear()

noturno = leia.questionFloat("\nDigite o valor do adicional noturno: ", {limitMessage: '\nPor favor! Digite somente o valor do adicional noturno'});
console.clear()

extras = leia.questionFloat("\nDigite a quantidade de horas extras realizadas: ", {limitMessage: '\nPor favor! Digite somente a quantidade de horas extras'});
console.clear()

descontos = leia.questionFloat("\nDigite seus descontos: ", {limitMessage: '\nPor favor! Digite somente o valor dos descontos'});
console.clear()

{liquido = (bruto + noturno) + (extras * 5) - descontos
}

console.log ("\nSeu salario liquido é no valor de: R$" + liquido);