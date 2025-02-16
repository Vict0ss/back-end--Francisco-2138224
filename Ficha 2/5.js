/// escrever uma funçao que desenhe um rentagul com asteriticos
/// a alrgura  e altura deve, er passadas como argumentos largura 20 altur 10
function drawRectangle(width, height) {
    for (let i = 0; i < height; i++) {
        var line = "";
        for (let j = 0; j < width; j++) {
            line += "*";
        }
        console.log(line);
    }
}
drawRectangle(10, 10);
