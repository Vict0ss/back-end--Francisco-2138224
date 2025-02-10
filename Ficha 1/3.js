function sumFirstNIntegers(N) {
    var sum = 0;
    
    for (var i = 1; i <= N; i++) {
        sum += i;
    }
    
    return sum;
}

// Exemplo de uso:
var N = 5;
console.log(sumFirstNIntegers(N));  // Saída: 15, pois 1+2+3+4+5 = 15
