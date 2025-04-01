const readLine = require("fs").readFileSync("dev/stdin").toString().trim();
const [N, ...lines] = readLine.split('\n');
const board = lines.map(line => line.split(' ').map(v => +v));
let ans = false;

const dfs = (curX: number, curY: number) => {
  if (curX >= +N || curY >= +N || ans) return;
  if(board[curX][curY] === 0) return;
  if (board[curX][curY] === -1) {
    ans = true;
    return;
  }

  dfs(curX + board[curX][curY], curY);
  dfs(curX, curY + board[curX][curY]);
};

dfs(0, 0);
console.log(ans ? "HaruHaru" : "Hing");



