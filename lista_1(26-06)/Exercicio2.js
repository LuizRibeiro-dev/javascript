const leia = require("readline-sync");

let nota1, nota2, nota3, nota4, media; 

console.clear()
nota1 = leia.questionFloat("\nDigite sua primeira nota: ", {limitMessage: '\nPor favor! Digite somente a nota, exemplo: 6,5'});
console.clear()

nota2 = leia.questionFloat("\nDigite sua segunda nota: ", {limitMessage: '\nPor favor! Digite somente a nota, exemplo: 6,5'});
console.clear()

nota3 = leia.questionFloat("\nDigite sua terceira nota: ", {limitMessage: '\nPor favor! Digite somente a nota, exemplo: 6,5'});
console.clear()

nota4 = leia.questionFloat("\nDigite sua quarta nota: ", {limitMessage: '\nPor favor! Digite somente a nota, exemplo: 6,5'});
console.clear()

{media = (nota1 + nota2 + nota3 + nota4) / 4
}

console.log ("\nSua media é: " + media);