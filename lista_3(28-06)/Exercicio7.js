const leia = require("readline-sync");
let vetornums = [2,5,1,3,4,9,7,8,10,6];
let posicao , numero;
  
numero = leia.questionInt("Digite o numero: ")
posicao = vetornums.indexOf(numero)

 if (posicao==-1) {console.log(`esse valor nao esta no vetor`)}
 else {console.log(`o numero ${numero} esta na posicao ${posicao}`)}