var valor1 = 2;
var valor2 = 2;

function calculate(valor1, valor2, op) {
    if (op == "+") {
        return valor1 + valor2;  
    } 
    else if (op == "concat") {
        return String(valor1) + String(valor2);  
    } 
    else {
        return "Operador inválido";
    }
}


console.log(calculate(valor1, valor2, "concat"));  
