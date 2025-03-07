/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const numCnt = nums.length;
  const dp = Array.from({ length: numCnt }, () => 0);

  dp[0] = nums[0];
  for (let i = 1; i < numCnt; i++) {
    dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
  }

  return Math.max(...dp);
};
