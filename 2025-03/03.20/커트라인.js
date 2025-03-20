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
    console.log(input[1].sort((a, b) => b - a)[input[0][1] - 1]);

    process.exit();
  });
