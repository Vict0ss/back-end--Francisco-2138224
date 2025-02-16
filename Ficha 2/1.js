///funcao calcular indice massa corporal
/// abaixo 18,5     normal 18,5 a 25  
/// acima 25 a 30    obeso   acima 30
/// imc= peso/altura2

// Função para calcular o índice de massa corporal (IMC)
var peso = 80; // em kg
var altura = 1.20; // em metros (120 cm = 1.20 m)

// Calculando o IMC
var imc = peso / Math.pow(altura, 2); // fórmula correta

console.log("O índice de massa corporal é:", imc.toFixed(2));

// Verificando a faixa de peso com base no IMC
if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Acima do peso");
} else {
    console.log("Obeso");
}
