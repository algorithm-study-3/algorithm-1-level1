const readLine = require("fs").readFileSync("dev/stdin").toString().trim();
const N = +readLine;

let dp: number[] = [0, 1, 2];
let i = 3;

while(i <= N) {
  dp[i] = (dp[i-1] + dp[i-2]) % 15746;
  i += 1;
}

console.log(dp[N] % 15746)



