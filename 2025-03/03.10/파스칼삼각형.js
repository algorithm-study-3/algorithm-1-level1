const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [r, c, w] = input[0].split(" ").map(Number)

// 파스칼 삼각형 만들기
const dp = Array.from({ length: r + w - 1 }, (v, i) =>
  Array.from({ length: i + 1 }, () => 0),
)

// 첫번째 문자, 마지막 문자 1로 초기화
for (let i = 0; i < r + w - 1; i += 1) {
  dp[i][0] = 1
  dp[i][dp[i].length - 1] = 1
}

// 파스칼 삼각형 값 초기화
for (let i = 2; i < r + w - 1; i += 1) {
  for (let j = 1; j < i; j += 1) {
    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
  }
}

// dp의 삼각형 값 구하기
let check = 1
let answer = 0
for (let i = r - 1; i < r + w - 1; i += 1) {
  for (let j = c - 1; j < c - 1 + check; j += 1) {
    answer += dp[i][j]
  }
  check += 1
}
console.log(answer)
