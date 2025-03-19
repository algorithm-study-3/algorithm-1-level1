/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const N = numCourses;

  const indegree = Array.from({ length: N }, () => 0);
  const graph = Array.from({ length: N }, () => []);

  for (let [a, b] of prerequisites) {
    indegree[a]++;
    graph[b].push(a);
  }

  const queue = [];
  for (let i = 0; i < N; i++) {
    if (!indegree[i]) queue.push(i);
  }

  const answer = [];

  while (queue.length) {
    const cur = queue.shift();
    answer.push(cur);

    for (let next of graph[cur]) {
      indegree[next]--;

      if (indegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  return answer.length === numCourses ? true : false;
};
