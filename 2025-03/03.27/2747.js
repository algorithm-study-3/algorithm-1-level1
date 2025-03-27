const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const n = parseInt(line);
  console.log(fibonacci(n).toString());
  rl.close();
});

function fibonacci(n) {
  if (n === 0) return BigInt(0);
  if (n === 1) return BigInt(1);

  let prev = BigInt(0);
  let curr = BigInt(1);

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}
