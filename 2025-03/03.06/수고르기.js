const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const numbers = input.slice(1).sort((a, b) => a - b)
let start = 0
let end = 1
let answer = Number.MAX_SAFE_INTEGER

// 차이가 m보다 작으면 end 넘어감
// 차이가 m보다 크면 answer 바꾸고 start 넘어감
while (end <= n - 1 && start <= end) {
  const diff = Math.abs(numbers[end] - numbers[start])
  if (diff >= m) {
    if (answer >= diff) {
      answer = diff
    }
    start += 1
  } else {
    end += 1
  }
}
console.log(answer)
