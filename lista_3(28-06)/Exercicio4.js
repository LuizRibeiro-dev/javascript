const leia = require("readline-sync");

let idade, genero, dev, mediaidade=0, contResp=0, backend=0, mfront=0, nbfull30=0, hmobile40=0;
let continua = true;

while(continua){
    
idade = leia.questionInt("Digite a idade:\n")


console.log("\nMulher cis               Código - 1")
console.log("\nHomem cis              Código - 2\n");
console.log("Nao binario            Código - 3")
console.log("\nMulher trans             Código - 4\n");
console.log("Homem trans            Código - 5")
console.log("\nOutros         Código - 6\n");
genero = leia.questionInt("Por favor! Digite o Codigo: ")
while (genero <1 || genero >6 ){
    switch(genero){
    case ("1" || "2" || "3" || "4" || "5" || "6"):
    break;
    default: 
    console.log("Por favor, digite corretamente o codigo\n");
    genero = leia.questionInt("Digite o Codigo: ")}
}


console.log("\nBackend               Código - 1")
console.log("\nFrontend              Código - 2\n");
console.log("Mobile            Código - 3")
console.log("\nFullStack             Código - 4\n");

dev = leia.questionInt("Por favor! Digite o Codigo: ")
while (dev <1 || dev >4 ){
    switch(dev){
    case ("1" || "2" || "3" || "4"):
    break;
    default: 
    console.log("Por favor, digite corretamente o codigo\n");
    dev = leia.questionInt("Digite o Codigo: ")}}

    contResp++;
    mediaidade+= idade
    if (dev == 1)
        backend++
    if ((genero == 1 || genero == 4) && (dev ==2))
        mfront++
    if ((genero == 2 || genero == 5) && (dev == 3) && (idade > 40))
        hmobile40++
    if ((genero == 3) && (dev == 4) && (idade <30))
        nbfull30++

    continua = leia.keyInYNStrict("\nDeseja continuar a leitura dos dados? ");
    


}console.log ("Total DEV backend: " , backend,
    "\nTotal de mulheres DEV Frontend: " , mfront,
    "\nTotal de homens DEV Mobile +40: " , hmobile40,
     "\nTotal de pessoas nao binarias DEV FullStack UNDER30: " , nbfull30,
     "\nTotal de pessoas que responderam a pesquisa: " , contResp ,
     "\nMedia de idade das pessoas que responderam a pesquisa: " , mediaidade/contResp)
