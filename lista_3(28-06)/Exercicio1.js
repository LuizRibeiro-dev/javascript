const leia = require("readline-sync");

let numero, contador, numero2 , cont=0;

numero = leia.questionInt("Digite o primeiro numero do intervalo: ")
numero2 = leia.questionInt("Digite o segundo numero do intervalo: ")
console.clear()
if (numero > numero2){
    
    console.log("Intervalo invalido!");}

    else {
    
      for(contador = numero; contador <= numero2; contador++){
                    
             
          if ((contador % 3 == 0) & (contador % 5 == 0))
            {
                 cont++
                  console.log(contador + " multiplo de 3 e 5")
                }}
                    

                  console.log("\nNo intervalor de " + numero + " e " + numero2 + " temos: " + cont + " numeros multiplos de 3 e 5")
                }