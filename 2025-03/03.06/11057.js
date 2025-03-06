const n = Number(require('fs').readFileSync('./input.txt').toString());

const DIV = 10007;
let dp = new Array(n).fill(0).map((i) => new Array(10).fill(0));

dp[0] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 1; i < n; i++) {
  dp[i][0] = 1;
  for (let j = 1; j <= 9; j++) {
    dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % DIV;
  }
}
console.log(dp[n - 1].reduce((acc, curr) => acc + curr, 0) % DIV);
