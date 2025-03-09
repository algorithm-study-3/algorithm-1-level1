/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const N = mat.length;
  const M = mat[0].length;

  const dist = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => -1)
  );

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  const bfs = (x, y) => {
    const queue = [];

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (mat[i][j] === 0) {
          queue.push([i, j, 0]);
          dist[i][j] = 0;
        }
      }
    }

    while (queue.length > 0) {
      const [cx, cy] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M || dist[nx][ny] > -1)
          continue;

        // 다음 위치의 거리를 미리 갱신
        dist[nx][ny] = dist[cx][cy] + 1;
        queue.push([nx, ny]);
      }
    }
  };

  bfs();

  return dist;
};
