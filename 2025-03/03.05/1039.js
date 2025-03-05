const n = Number(require('fs').readFileSync('input.txt').toString());

const DIV = 9901;
let dp = new Array(n + 1).fill(0).map((i) => new Array(3).fill(0));

dp[1][0] = 1;
dp[1][1] = 1;
dp[1][2] = 1;

for (let i = 2; i <= n; i++) {
  dp[i][0] = (dp[i - 1][1] + dp[i - 1][2]) % DIV;
  dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % DIV;
  dp[i][2] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % DIV;
}
console.log((dp[n][0] + dp[n][1] + dp[n][2]) % DIV);
