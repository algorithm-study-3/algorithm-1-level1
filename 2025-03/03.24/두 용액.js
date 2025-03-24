const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', (line) => {
    input.push(line.split(' ').map(Number));
  })
  .on('close', () => {
    const N = input[0][0];
    const solutions = input[1];

    solutions.sort((a, b) => a - b);

    let left = 0;
    let right = N - 1;

    let minAbs = Infinity;
    let answer = [0, 0];

    while (left < right) {
      const sum = solutions[left] + solutions[right];

      if (Math.abs(sum) < minAbs) {
        minAbs = Math.abs(sum);
        answer = [solutions[left], solutions[right]];
      }

      if (sum < 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }

    console.log(answer[0], answer[1]);

    process.exit();
  });
