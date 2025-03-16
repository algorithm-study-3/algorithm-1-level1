let [n, a] = require('fs').readFileSync('input.txt').toString().split('\n');

n = parseInt(n);
a = a.split(' ').map(Number);

const dp = new Array(n).fill(0);
dp[0] = a[0];

for (let i = 1; i < n; i++) {
  dp[i] += a[i];
  for (let j = 0; j < i; j++) {
    if (a[i] >= a[j]) {
      dp[i] = Math.max(dp[j] + a[i], dp[i]);
    }
  }
}
console.log(Math.max(...dp));
