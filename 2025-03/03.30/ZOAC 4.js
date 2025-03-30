const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [H, W, N, M] = input[0].split(" ").map(Number);

let answer = 0;
let left = 0;
let right = 0;

while (left < H) {
  right = 0;

  while (right < W) {
    answer += 1;
    right += M + 1;
  }

  left += N + 1;
}

console.log(answer);
