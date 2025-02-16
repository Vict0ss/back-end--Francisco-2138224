/// contar os caracter 
function countChar(str, charToCount) {
    str = str.toLowerCase();
    charToCount = charToCount.toLowerCase();   
    let count = 0;   
    for (let i = 0; i < str.length; i++) {
        if (str[i] === charToCount) {
            count++;
        }
    }   
    return count;
}
console.log(countChar("Hello", "e"));
function contarVogais(str) {
    var vogais = ["a", "e", "i", "o", "u"];
    var count = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(contarVogais("Fim de semana, uau ok"));
