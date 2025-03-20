let [n, arr] = require('fs').readFileSync('input.txt').toString().split('\n');

n = parseInt(n);
arr = arr.split(' ').map(Number);

dp = [];
dp[0] = 1;
for (let i = 1; i < n; i++) {
  dp[i] = 1;
  for (let j = 0; j < i; j++) {
    if (arr[i] < arr[j]) {
      dp[i] = Math.max(dp[j] + 1, dp[i]);
    }
  }
}

console.log(Math.max(...dp));
