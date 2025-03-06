const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    input = line.split(' ');
    console.log(input[0].repeat(Number(input[1])));
    rl.close();
});