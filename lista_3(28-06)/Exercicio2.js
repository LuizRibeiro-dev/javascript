const leia = require("readline-sync");

let numero, contador, par=0 , impar=0;

for(contador = 1; contador <= 10; contador++){
    numero = leia.questionInt("Digite um numero: ")

    if (numero % 2 == 0){
        par++
    }
    else{impar++}
    }
console.clear()
    console.log("\nTotal de numeros pares: " + par + "\nTotal de numeros impares: " + impar)