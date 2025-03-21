const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', function (line) {
    input.push(line.split(' ').map((el) => parseInt(el)));
  })
  .on('close', function () {
    const [N, M, ingredients] = input;
    let answer = 0;

    ingredients.sort((a, b) => a - b);
    for (let i = 0; i < N - 1; i++) {
      const current = ingredients.pop();
      if (ingredients.includes(M - current)) {
        answer += 1;
      }
    }
    console.log(answer);

    process.exit();
  });
