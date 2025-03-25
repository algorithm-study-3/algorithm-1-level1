const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', (line) => {
    input = line.split(' ').map(Number);
  })
  .on('close', () => {
    const N = input[0];
    const MOD = 15746;

    if (N === 1) {
      console.log(1);
      process.exit();
    }

    if (N === 2) {
      console.log(2);
      process.exit();
    }

    let prev = 1;
    let curr = 2;
    let next = 0;

    for (let i = 3; i <= N; i++) {
      next = (prev + curr) % MOD;
      prev = curr;
      curr = next;
    }

    console.log(curr);
    process.exit();
  });
