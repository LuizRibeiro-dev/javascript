const leia = require('readline-sync')

let numero;

numero = leia.question("\nDigite o numero: ") ;

if ((numero % 2) === 0 && numero > 0)  
    {
    console.log("\no ",+ numero," é par e positivo");
}else if ((numero % 2) === 1 && numero > 0)  
    {
    console.log("\no ",+ numero," é impar e positivo");
}else if ((numero % 2) === 0 && numero < 0)  
    {
    console.log("\no ",+ numero," é par e negativo");
}else if ((numero/numero) != 0 && numero < 0)  
    {
    console.log("\no ",+ numero," é impar e negativo");
}
else 
    {
    console.log("\no",+ numero," é neutro");
}