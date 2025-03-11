/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const N = nums.length;
  const answer = new Set();

  for (let i = 0; i < N; i++) {
    if (nums[i - 1] === nums[i]) continue;

    let left = i + 1;
    let right = N - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else if (sum === 0) {
        const arr = [nums[i], nums[left], nums[right]].sort((a, b) => a - b);
        answer.add(arr.join(" "));
        left++;
      }
    }
  }

  return [...answer].map((x) => x.split(" ").map(Number));
};
