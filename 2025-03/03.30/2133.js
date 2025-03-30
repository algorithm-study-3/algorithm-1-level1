const n = parseInt(require('fs').readFileSync('input.txt').toString().trim());

if (n % 2 === 1) console.log(0);
else {
  dp = [];
  dp[0] = 1;
  dp[1] = 0;
  dp[2] = 3;

  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 2] * dp[2];
    for (let j = i - 4; j >= 0; j -= 2) {
      dp[i] += dp[j] * 2;
    }
  }

  console.log(dp[n]);
}
