const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [N, K] = input[0].split(" ").map(Number)
const arr = input.slice(1).map((row) => row.split(" ").map(Number))

const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0))

// dp [i][j] i번째 물건까지 고려했을 때 j무게까지 고려했을 때 최대 가치

for (let i = 1; i <= N; i += 1) {
  const [W, V] = arr[i - 1]
  for (let j = 1; j <= K; j += 1) {
    if (j < W) {
      dp[i][j] = dp[i - 1][j]
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - W] + V)
    }
  }
}
console.log(Math.max(...dp[N]))
