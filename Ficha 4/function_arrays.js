const functionsArray = [];

functionsArray.push(() => console.log("Hello World 1"));
functionsArray.push(() => console.log("Hello World 2"));
functionsArray.push(() => console.log("Hello World 3"));
functionsArray.forEach(func => func());