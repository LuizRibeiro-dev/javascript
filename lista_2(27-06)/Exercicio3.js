const leia = require('readline-sync')

let nome;
let idade;
let doador;

nome = leia.question("\nDigite seu nome completo: ") ;
idade = leia.question("\nDigite sua idade: ") 
parseInt(idade)

if ((idade <= 69) && (idade >= 18))  
    {
        doador = leia.question("\nEssa e sua primeira doacao? (S/N) ");
}else {console.log("\n" + nome , "não está apto para doar sangue!" )};

if (doador == "N")
    {console.log("\n" + nome , ",voce esta apto para doar sangue!")}
else  {console.log("\n" + nome , ",voce nao apto para doar sangue!")}