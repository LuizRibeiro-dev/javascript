const leia = require('readline-sync')

let nome;
let cargo;
let total;
let salario;

nome = leia.question("Digite seu nome:\n")
console.log("Ola, " + nome)
console.log("\nGerente               Código - 1")
console.log("\nVendedor              Código - 2\n");
console.log("Supervisor            Código - 3")
console.log("\nMotorista             Código - 4\n");
console.log("Estoquista            Código - 5")
console.log("\nTecnico de TI         Código - 6\n");

cargo = leia.question("Por favor! Digite o Codigo do cargo: ")
switch (cargo) {
    case "1":
    console.clear()  
    console.log("\nGerente - Percentual do reajuste: 10%");
      salario = leia.question("Digite o salario atual ")
      total = parseInt(salario) + parseInt(salario*0.1)
      console.clear()
      console.log(nome + ", o valor atualizado do salario é: R$" + total)
      break;
      
      case "2":
        console.clear()  
        console.log("\nVendedor - Percentual do reajuste: 7%");
          salario = leia.question("Digite o salario atual ")
          total = parseInt(salario) + parseInt(salario*0.07)
          console.clear()
          console.log(nome + ", o valor atualizado do salario é: R$" + total)
          break;
          
          case "3":
    console.clear()  
    console.log("\nSupervisor - Percentual do reajuste: 9%");
      salario = leia.question("Digite o salario atual ")
      total = parseInt(salario) + parseInt(salario*0.09)
      console.clear()
      console.log(nome + ", o valor atualizado do salario é: R$" + total)
      break;
      
      case "4":
    console.clear()  
    console.log("\nMotorista - Percentual do reajuste: 6%");
      salario = leia.question("Digite o salario atual ")
      total = parseInt(salario) + parseInt(salario*0.06)
      console.clear()
      console.log(nome + ", o valor atualizado do salario é: R$" + total)
      break;
      
      case "5":
    console.clear()  
    console.log("\nGerente - Percentual do reajuste: 5%");
      salario = leia.question("Digite o salario atual ")
      total = parseInt(salario) + parseInt(salario*0.05)
      console.clear()
      console.log(nome + ", o valor atualizado do salario é: R$" + total)
      break;

      case "6":
    console.clear()  
    console.log("\nGerente - Percentual do reajuste: 8%");
      salario = leia.question("Digite o salario atual ")
      total = parseInt(salario) + parseInt(salario*0.08)
      console.clear()
      console.log(nome + ", o valor atualizado do salario é: R$" + total)
      break;
    default: 
      console.log("Por favor, digite somente o codigo do cargo");
  }
  
  