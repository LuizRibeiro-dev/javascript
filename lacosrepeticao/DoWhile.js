const leia = require("readline-sync");

let continua;
let numero1, numero2, resultado;

do{
    numero1 = leia.questionInt("Digite o primeiro valor: ")
    numero2 = leia.questionInt("Digite o segundo o valor: ")
    
    resultado = numero1 + numero2;
    console.log("O resultado da soma é: " + resultado);

    console.log("\n++++++++++++++++++++MENU++++++++++++++++++++")
    continua = leia.keyInYNStrict("\nDeseja usar nossa calculadora de semoa? ");
    console.log("++++++++++++++++++++++++++");

}while(continua)