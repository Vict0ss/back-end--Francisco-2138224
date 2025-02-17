///funcao calcular indice massa corporal
/// abaixo 18,5     normal 18,5 a 25  
/// acima 25 a 30    obeso   acima 30
/// imc= peso/altura2

var peso = 80; 
var altura = 1.20;

var imc = peso / Math.pow(altura, 2); 

console.log("O índice de massa corporal é:", imc.toFixed(2));

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Acima do peso");
} else {
    console.log("Obeso");
}
