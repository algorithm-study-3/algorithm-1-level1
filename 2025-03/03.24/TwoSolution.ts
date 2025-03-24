const readLine = require("fs").readFileSync("dev/stdin").toString().trim();

const [[N], numbers]: number[][] = readLine
  .split('\n')
  .map((v: string) => v.split(' ').map(n => +n));

const ascendingNumbers = [...numbers].sort((a, b) => a - b);

let left = 0;
let right = N - 1;
let minSum = Number.MAX_SAFE_INTEGER;
let minSumNumbers = [];

while (left < right) {
  const sum = ascendingNumbers[left] + ascendingNumbers[right];
  if (Math.abs(sum) < minSum) {
    minSum = Math.abs(sum);
    minSumNumbers = [ascendingNumbers[left], ascendingNumbers[right]];
  }

  if (sum < 0) {
    left += 1;
  }

  if (sum > 0) {
    right -= 1;
  }

  if (sum === 0) {
    break;
  }
}

console.log(minSumNumbers.join(" "));

