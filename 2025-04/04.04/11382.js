const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const result = input.reduce((sum, num) => sum + Number(num), 0);
console.log(result);
