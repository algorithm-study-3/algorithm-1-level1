const [n, ...drug] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let dp = [];

dp[0] = 0;
dp[1] = drug[0];
dp[2] = drug[0] + drug[1];

for (let i = 3; i <= n; i++) {
  // i번째를 마실 경우, 안 마실 경우
  // 안 마실 경우: o o x -> dp[i - 1];
  // 마실 경우: o x o -> drug[i] + dp[i-2] / x o o -> drug[i] + drug[i-1] + dp[i-3]
  dp[i] = Math.max(
    dp[i - 1],
    drug[i - 1] + dp[i - 2],
    drug[i - 1] + drug[i - 2] + dp[i - 3]
  );
}
console.log(dp[n]);
