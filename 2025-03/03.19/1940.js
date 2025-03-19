let [n, m, arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

n = parseInt(n);
m = parseInt(m);
arr = arr.split(' ').map(Number);

arr.sort((a, b) => a - b);

let end = n - 1;
let answer = 0;

for (let i = 0; i < n; i++) {
  if (i > end) break;

  if (arr[i] + arr[end] > m) {
    i--;
    end--;
    continue;
  }

  if (arr[i] + arr[end] === m) {
    answer++;
    end--;
  }
}
console.log(answer);
