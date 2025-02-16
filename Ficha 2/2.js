function reverseWords(str) {
    var splitted = str.split(" ");
    var reversedWords = [];
    for (let i = 0; i < splitted.length; i++) {
        const word = splitted[i];
        let reversedWord = "";
        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }
        reversedWords.push(reversedWord);
    }
    return reversedWords.join(" ");
}
console.log(reverseWords("Hoje é domingo"));
