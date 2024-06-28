const leia = require('readline-sync')

var numeroa;
var numerob;
var numeroc;
var numerod;


numeroa = leia.question("\nDigite o numero A: ") 
console.clear();

numerob = leia.question("\nDigite o numero B: ")
console.clear();

numeroc = leia.question("\nDigite o numero C: ")
console.clear();

numerod = parseInt(numeroa) + parseInt(numerob);

if(numerod > numeroc) {
    console.log("\nA soma de A + B e maior do que C");
}else if(numerod < numeroc) {
    console.log("\nA soma de A + B e menor do que C");
}
else {
    console.log ("\nA soma de A + B e igual a C");
}