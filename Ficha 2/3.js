/// funçao quue devolve as vogais da frase
function vogais(str) {
    str = str.toLowerCase();
    var vog = ["a", "e", "i", "o", "u"];
        var vogaisEncontradas = "";
    for (let i = 0; i < str.length; i++) {
        if (vog.includes(str[i])) {
            vogaisEncontradas += str[i];
        }
    }
    return vogaisEncontradas;
}
console.log(vogais("Fim de semana, uau ok"));
