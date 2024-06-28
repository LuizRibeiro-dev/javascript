const leia = require('readline-sync')

let opcao;
let quantidade;
let total;

console.log("\nCachorro quente              Código do produto - 1")
console.log("\nX-Salada                     Código do produto - 2\n");
console.log("X-Bacon                      Código do produto - 3")
console.log("\nBauru                        Código do produto - 4\n");
console.log("Refrigerante                 Código do produto - 5")
console.log("\nSuco de laranja              Código do produto - 6\n");

opcao = leia.question("Digite o Codigo do produto desejado: ")
switch (opcao) {
    case "1":
    console.clear()  
    console.log("\nCachorro quente - R$10.00");
      quantidade = leia.question("Quantas unidades? ")
      total = 10*quantidade
      console.clear()
      console.log("\nObrigado por escolher comprar conosco\nSeu pedido: " + quantidade , "x Cachorro quente")
      console.log ("\nTotal de: R$" + total)
      break;
        case "2":
            console.clear()
         console.log(" X-Salada - R$15.00");
         quantidade = leia.question("Quantas unidades? ")
         total = 15*quantidade
         console.clear()
         console.log("\nObrigado por escolher comprar conosco\nSeu pedido: " + quantidade , "x X-Salada")
         console.log ("\nTotal de: R$" + total)
        break;
        case "3":
            console.clear()
            console.log(" X-Bacon - R$18.00");
            quantidade = leia.question("Quantas unidades? ")
            total = 18*quantidade
            console.clear()
            console.log("\nObrigado por escolher comprar conosco\nSeu pedido: " + quantidade , "x X-Bacon")
            console.log ("\nTotal de: R$" + total)
           break;
           case "4":
            console.clear()
            console.log(" Bauru - R$12.00");
            quantidade = leia.question("Quantas unidades? ")
            total = 12*quantidade
            console.clear()
            console.log("\nObrigado por escolher comprar conosco\nSeu pedido: " + quantidade , "x Bauru")
            console.log ("\nTotal de: R$" + total)
           break; 
           case "5":
            console.clear()
           console.log(" Refrigerante - R$8.00");
           quantidade = leia.question("Quantas unidades? ")
           total = 5*quantidade
           console.clear()
           console.log("\nObrigado por escolher comprar conosco\nSeu pedido: " + quantidade , "x Refrigerante")
           console.log ("\nTotal de: R$" + total)
          break;
          case "6":
            console.clear()
            console.log(" Suco de laranja - R$13.00");
            quantidade = leia.question("Quantas unidades? ")
            total = 13*quantidade
            console.clear()
            console.log("\nObrigado por escolher comprar conosco\nSeu pedido: " + quantidade , "x Suco de laranja")
            console.log ("\nTotal de: R$" + total)
           break;
    default: 
      console.log("Por favor, digite somente o codigo do produto");
  }
  
  