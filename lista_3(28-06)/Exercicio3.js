const leia = require("readline-sync");

let idade=0;
let cont1=0, cont2=0 , cont3=50;

while(idade>=0){
    idade = leia.questionInt("Digite a idade: ")
   
    if (idade < 26 && idade >= 0)
    {
        cont1++;
    }
    else if (idade > 50 )
    {
        cont2++;
    }
}
console.log ("\nTotal de pessoas menores de 21 anos: " + cont1 + "\n" + "Total de pessoas maiores de 50 anos: " + cont2)