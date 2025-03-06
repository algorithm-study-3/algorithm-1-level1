const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    let result = line.split('').map(char =>
        char == char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join('');
    console.log(result);
    rl.close();
}).on('close',function(){
    str = input[0];
});