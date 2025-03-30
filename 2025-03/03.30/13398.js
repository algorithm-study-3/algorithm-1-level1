let [n, arr] = require('fs')
  .readFileSync('input.txt')

  .toString()
  .trim()
  .split('\n');

n = parseInt(n);
arr = arr.split(' ').map(Number);

let dp = new Array(n).fill(0).map((_) => new Array(2).fill(0));

// let dp = [];
// 0-> 아무것도 삭제 하지 않은 경우
// 1-> 삭제 하는 경우
dp[0] = [arr[0], arr[0]];

let answer = Math.max(dp[0][0], dp[0][1]);
for (let i = 1; i < n; i++) {
  dp[i][0] = Math.max(dp[i - 1][0] + arr[i], arr[i]);
  // dp[i-1][0] -> 현재 i번째를 삭제하는 경우
  // dp[i-1][1] + arr[i] -> 앞에 삭제된 경우가 있어 현재는 삭제하지 않는 경우
  dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1] + arr[i]);

  answer = Math.max(answer, dp[i][0], dp[i][1]);
}
console.log(answer);
