const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const n = parseInt(line);
  printN(n);
  rl.close();
});

function printN(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i.toString());
  }
}
