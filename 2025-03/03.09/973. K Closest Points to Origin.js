/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  // k개의 원점과 가장 가까운 좌표
  const dist = [];

  for (let i = 0; i < points.length; i++) {
    dist.push([Math.abs(points[i][0]) ** 2 + Math.abs(points[i][1]) ** 2, i]);
  }

  dist.sort((a, b) => a[0] - b[0]);

  const answer = [];

  for (let i = 0; i < k; i++) {
    const idx = dist[i][1];
    answer.push(points[idx]);
  }

  return answer;
};
