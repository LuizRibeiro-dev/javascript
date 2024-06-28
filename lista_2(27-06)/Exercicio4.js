const leia = require('readline-sync')

let nivel1;
let nivel2;
let nivel3;

nivel1 = leia.question("\nVertebrado ou invertebrado? (Utilize apenas letras maiusculas) \n") ;
if (nivel1 == "VERTEBRADO")  
    {
        nivel2 = leia.question("\nAVE ou MAMIFERO? \n");
    }else  {nivel2 = leia.question("\nINSETO ou ANELIDEO? \n")};

if (nivel2 == "AVE")
    { 
        nivel3 = leia.question("\nCARNIVORO ou ONIVORO? \n")
    }
if (nivel2 == "MAMIFERO")
    {
        nivel3 = leia.question("\nONIVORO ou HERBIVORO? \n")
    }
if (nivel2 == "INSETO")
    {
        nivel3 = leia.question("\nHEMATOFAGO ou HERBIVORO? \n")
    }
if (nivel2 == "ANELIDEO")
    {
        nivel3 = leia.question("\nHEMATOFAGO ou ONIVORO? \n")
    }

if (nivel3 == "CARNIVORO")
    {
        console.log("\nO animal é a AGUIA")
    }
if (nivel3 == "ONIVORO" && nivel2 == "AVE")
    {
         console.log("\nO animal é a POMBA")
    }
if (nivel3 == "ONIVORO" && nivel2 == "MAMIFERO")
    {
         console.log("\nO animal é O HOMEM")
    }
if (nivel3 == "HERBIVORO" && nivel2 == "MAMIFERO")
    {
         console.log("\nO animal é a VACA")
    }
if (nivel3 == "HEMATOFAGO" && nivel2 == "INSETO")
    {
        console.log("\nO animal é a PULGA")
    }
if (nivel3 == "HERBIVORO" && nivel2 == "INSETO")
    {
        console.log("\nO animal é a LAGARTA")
    }
if (nivel3 == "HEMATOFAGO" && nivel2 == "ANELIDEO")
    {
        console.log("\nO animal é a SANGUESSUGA")
    }
if (nivel3 == "ONIVORO" && nivel2 == "ANELIDEO")
    {
     console.log("\nO animal é a MINHOCA")
    }