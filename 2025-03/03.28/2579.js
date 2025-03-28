const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const stairs = input.slice(1).map(Number);

const dp = Array(n + 1).fill(0);

if (n >= 1) dp[1] = stairs[0]; // 계단이 1개일 경우
if (n >= 2) dp[2] = stairs[0] + stairs[1]; // 계단이 2개일 경우

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 2] + stairs[i - 1], // i-2에서 2칸 뛰어서 i로
    dp[i - 3] + stairs[i - 2] + stairs[i - 1], // i-3에서 i-1로, i-1에서 i로
  );
}

console.log(dp[n]);
