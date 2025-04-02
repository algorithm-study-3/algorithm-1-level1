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

console.log(arr.map(lines => lines.join(" ")).join("\n"));