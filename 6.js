var input = require("fs").readFileSync("stdin", "utf8");
var linhas = input.split("\n");

var entrada = parseFloat(input);

var resultado = (4/3) * 3.14159 * Math.pow(entrada, 3);
console.log("VOLUME = " + resultado.toFixed(3));