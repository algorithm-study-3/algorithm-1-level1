/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let [s, e] = newInterval;
  const left = [];
  const right = [];

  for (let [from, to] of intervals) {
    if (to < s) {
      left.push([from, to]);
      continue;
    }

    if (e < from) {
      right.push([from, to]);
      continue;
    }

    s = Math.min(from, s);
    e = Math.max(to, e);
  }

  return [...left, [s, e], ...right];
};
