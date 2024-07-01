const leia = require("readline-sync");

let numero, soma=0, media, contador=-1;

do{ contador++
    numero = leia.questionInt("Digite o numero: ")
    if (numero % 3 == 0 ) soma+=numero;

}while(numero!=0);
console.log(soma)
console.log(contador)
console.log ("A media entre os multiplos de 3: ",soma/contador)