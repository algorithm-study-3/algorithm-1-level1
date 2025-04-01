const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const board = input.slice(1).map((line) => line.split(' ').map(Number));

const visited = Array.from({ length: N }, () => Array(N).fill(false));

const queue = [[0, 0]];
visited[0][0] = true;

let result = 'Hing';

while (queue.length > 0) {
  const [x, y] = queue.shift();
  const jump = board[x][y];

  if (jump === -1) {
    result = 'HaruHaru';
    break;
  }

  const dx = [0, 1];
  const dy = [1, 0];

  for (let i = 0; i < 2; i++) {
    const nx = x + dx[i] * jump;
    const ny = y + dy[i] * jump;

    if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }
}

console.log(result);
