let [test, arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .split('\n');

test = test.split(' ').map(Number);

const n = test[0];
const s = test[1];
const m = test[2];

arr = arr.split(' ').map(Number);

dp = new Array(n).fill(0).map((_) => new Array(m + 1).fill(0));

if (s - arr[0] >= 0) dp[0][s - arr[0]] = 1;
if (s + arr[0] <= m) dp[0][s + arr[0]] = 1;

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= m; j++) {
    if (dp[i - 1][j] === 1) {
      if (j - arr[i] >= 0) dp[i][j - arr[i]] = 1;
      if (j + arr[i] <= m) dp[i][j + arr[i]] = 1;
    }
  }
}

let answer = -1;
for (let i = m; i >= 0; i--) {
  if (dp[n - 1][i] === 1) {
    answer = i;
    break;
  }
}

console.log(answer);
