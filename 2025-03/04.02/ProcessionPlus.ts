const readLine = require("fs").readFileSync("dev/stdin").toString().trim();
const [first, ...rest] = readLine.split('\n');

const [N, M] = first.split(' ').map(v => +v);
const numberBoard = rest.map(line => line.split(' ').map(v => +v));
let arr = Array.from({ length: N }, () => new Array(M).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    arr[i][j] = numberBoard[i][j] + numberBoard[i + N][j];
  }
}
let answer = "";

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
        answer += arr[i][j] + " ";
    }
    answer += "\n";
}
console.log(answer.trim());