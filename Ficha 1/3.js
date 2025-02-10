function sumFirstNIntegers(N) {
    var sum = 0;
    
    for (var i = 1; i <= N; i++) {
        sum += i;
    }
    
    return sum;
}

// Exemplo de uso:
var N = 5;
console.log(sumFirstNIntegers(N));  
console.log("Pressione Enter para sair...");
process.stdin.resume();
process.stdin.on("data", () => process.exit());
