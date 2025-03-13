let [n, ...arr] = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');
n = parseInt(n);

const newArr = [];

arr.forEach((arr) => newArr.push(arr.trim().split(' ').map(Number)));
const dp = new Array(n).fill(0).map((_) => new Array(n - 1).fill(0));

dp[0][0] = newArr[0][0];

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][0] + newArr[i][j];
    } else if (j === i) {
      dp[i][j] = dp[i - 1][j - 1] + newArr[i][j];
    } else dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + newArr[i][j];
  }
}

console.log(Math.max(...dp[n - 1]));
