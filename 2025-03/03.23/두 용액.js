const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let left = 0;
let right = N - 1;

let min = Infinity;
let result = [];

while (left < right) {
  const sum = arr[left] + arr[right];

  if (Math.abs(sum) < min) {
    min = Math.abs(sum);
    result = [arr[left], arr[right]];
  }

  if (sum < 0) {
    left++;
  } else {
    right--;
  }
}

console.log(result.join(" "));
