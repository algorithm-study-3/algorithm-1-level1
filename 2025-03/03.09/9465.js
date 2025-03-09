const [t, ...tc] = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const calcMaxStiker = (n, stikers) => {
  const dp = new Array(n).fill(0).map((i) => new Array(3).fill(0));
  // 0-> o x / 1 -> x o / 2 -> x x

  dp[0] = [stikers[0][0], stikers[1][0], 0];

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][1] + stikers[0][i], dp[i - 1][2] + stikers[0][i]);
    dp[i][1] = Math.max(dp[i - 1][0] + stikers[1][i], dp[i - 1][2] + stikers[1][i]);
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][0]);
  }

  console.log(Math.max(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]));
};

for (let i = 0; i < t; i++) {
  const n = Number(tc[i * 3 + 0]);
  const stikers = [tc[i * 3 + 1].split(' ').map(Number), tc[i * 3 + 2].split(' ').map(Number)];
  calcMaxStiker(n, stikers);
}
