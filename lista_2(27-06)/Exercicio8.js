const leia = require('readline-sync')

let saldo;
let saque;
let operacao;
let salario;

saldo = 1000


console.log("\nSALDO                       Código - 1");
console.log("\nSAQUE                  Código - 2\n");
console.log("DEPOSITO                 Código - 3");


operacao = leia.question("Por favor! Digite o codigo da operacao: ")
switch (operacao) {
    case "1":
    console.clear()  
    console.log("SEU SALDO: R$"  + saldo);
      break;
      case "2":
        console.clear()
        saque = leia.question("Qual valor deseja sacar?\n")
        if (saque<=1000){parseInt(saldo) - parseInt(saque)
        saldo = parseInt(saldo) - parseInt(saque)
        console.log("SEU SALDO ATUAL: R$" + saldo)}
        else  {console.log("Desculpe, voce nao tem saldo suficiente")};
          break;
          case "3":
            console.clear()  
            deposito = leia.question("Qual valor deseja depositar?\n")
            if (deposito>0){parseInt(saldo) + parseInt(deposito)
                saldo = parseInt(saldo) + parseInt(deposito)
                console.log("SEU SALDO ATUAL: R$" + saldo)}
                else {console.log("Desculpe, valor invalido")}
                
              break;
              default:
                    console.log("Digite somente o codigo da operação");
            }