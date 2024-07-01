const leia = require("readline-sync");
let vetornums = [2,5,1,3,4,9,7,8,10,6];
let impares=[] , pares=[];
let contimpar=0 , contpar=0
let soma=0

for(var i =0;i<vetornums.length;i++){
    soma+=vetornums[i];
    }
    
    console.log(`a soma dos valores é: ${soma}`);
    console.log(`a media dos valores é: ${soma/i}`)

for (contvetor=0;contvetor<10;contvetor++)
    if (vetornums[contvetor]%2 ==0){
        pares[contpar]=vetornums[contvetor];
        contvetor++;
    }else{impares[contimpar]=vetornums[contvetor];
        contimpar++;
    }

 
console.log(`${impares}`)
 
console.log(`${pares}`)

console.log(`${vetornums}`)