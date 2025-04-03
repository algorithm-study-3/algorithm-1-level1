const readLine = require("fs").readFileSync("dev/stdin").toString().trim();
const [[N], numbers, [v]] = readLine.split("\n").map((line) => line.split(" ").map((v) => +v))

const ans =  numbers.reduce((acc, cur) => cur === v  ? acc + 1 : acc, 0);

console.log(ans);