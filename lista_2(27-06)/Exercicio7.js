const leia = require('readline-sync')

let numero1;
let numero2;
let operacao;
let salario;

numero1 = leia.question("Digite o primeiro numero:\n")
numero2 = leia.question("\nDigite o segundo numero: \n")
console.clear()
console.log("Ok, agora qual operacao voce deseja fazer? " , numero1 , "(?)", numero2 , "\n") 

console.log("\nSOMA (+)                       Código - 1")
console.log("\nSUBTRAÇÃO (-)                  Código - 2\n");
console.log("MULTIPLICACAO (*)                 Código - 3")
console.log("\nDIVISAO (/)                    Código - 4\n");


operacao = leia.question("Por favor! Digite o codigo da operacao: ")
switch (operacao) {
    case "1":
    console.clear()  
    console.log(numero1 , "+" , numero2 , "=" , parseInt(numero1) + parseInt(numero2));
      break;
      case "2":
        console.clear()  
        console.log(numero1 , "-" , numero2 , "=" , parseInt(numero1) - parseInt(numero2));
          break;
          case "3":
            console.clear()  
            console.log(numero1 , "*" , numero2 , "=" , parseInt(numero1) * parseInt(numero2));
              break;
              case "4":
                console.clear()  
                console.log(numero1 , "/" , numero2 , "=" , parseInt(numero1) / parseInt(numero2));
                  break;
                  default:
                    console.log("Digite somente o codigo da operação")
}