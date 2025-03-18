const readLine = require("fs").readFileSync("dev/stdin").toString().trim();

const [[N, k], scores]: number[][] = readLine.split("\n").map((v: string) => v.split(" ").map((n: string) => +n));

scores.sort((a, b) => b - a);

console.log(scores[k-1]);