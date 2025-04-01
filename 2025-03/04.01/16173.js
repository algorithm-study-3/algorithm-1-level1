let [n, ...arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

n = parseInt(n);

let newArr = [];
for (let i = 0; i < n; i++) {
  newArr.push(arr[i].split(' ').map(Number));
}

let answer = 'Hing';
let checkArr = new Array(n).fill(0).map((_) => new Array(n).fill(0));
canJump(0, 0);

function canJump(i, j) {
  const jump = newArr[i][j];
  if (jump === -1) {
    answer = 'HaruHaru';
    return;
  }

  if (jump === 0) return;

  if (answer === 'Hing' && i + jump < n && checkArr[i][j] === 0)
    canJump(i + jump, j);

  if (answer === 'Hing' && j + jump < n && checkArr[i][j] === 0)
    canJump(i, j + jump);

  checkArr[i][j] = 1;

  return;
}
console.log(answer);
