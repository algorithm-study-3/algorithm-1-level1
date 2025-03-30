const n = parseInt(require('fs').readFileSync('input.txt').toString().trim());

dp = [];
dp[0] = 0;
dp[1] = 0;
dp[2] = 3;

for (let i = 3; i <= n; i++) {
  if (i % 2 === 1) dp[i] = 0;
  dp[i] = dp[i - 2] * dp[2];
  for (let j = i - 4; j >= 0; j -= 2) {
    dp[i] += dp[j] * 2;
  }
}

console.log(dp[n]);
