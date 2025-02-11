///funcao calcular indice massa corporal
/// abaixo 18,5     normal 18,5 a 25  
/// acima 25 a 30    obeso   acima 30
/// imc= peso/altura2

var peso = 80;
var altura = 120;
var imc = Math.pow(120,2)

console.log("O indice de massa corporal é:")
if(imc >=18.5)
    console.log("A baixo do peso");
else
if(imc >=18.5 && imc <=25)
    console.log("No peso normal ");
else
if(imc >=25 && imc <30)
    console.log("A cima do peso");
else
if(imc <=30)
    console.log("Obeso");
}
