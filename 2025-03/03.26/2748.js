const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const n = parseInt(line); // 입력값을 정수로 변환
  console.log(fibonacci(n).toString()); // 결과를 문자열로 출력
  rl.close();
});

function fibonacci(n) {
  if (n === 0) return BigInt(0);
  if (n === 1) return BigInt(1);

  let prev = BigInt(0); // F(n-2)
  let curr = BigInt(1); // F(n-1)

  for (let i = 2; i <= n; i++) {
    const next = prev + curr; // F(n) = F(n-1) + F(n-2)
    prev = curr;
    curr = next;
  }

  return curr;
}
