const leia = require("readline-sync");

let n1, n2, n3, n4, media; 

console.clear()
n1 = leia.questionFloat("\nDigite o primeiro valor: ", {limitMessage: '\nPor favor! Digite somente o valor'});
console.clear()

n2 = leia.questionFloat("\nDigite o segundo valor: ", {limitMessage: '\nPor favor! Digite somente o valor'});
console.clear()

n3 = leia.questionFloat("\nDigite o terceiro valor: ", {limitMessage: '\nPor favor! Digite somente o valor'});
console.clear()

n4 = leia.questionFloat("\nDigite o quarto valor: ", {limitMessage: '\nPor favor! Digite somente o valor'});
console.clear()

{media = (n1 * n2) - (n3 * n4)
}

console.log ("\nO resultado é: " + media);