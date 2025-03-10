/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 겹치는 문자 없이 가장 긴 부분수열

  const len = s.length;
  const cnt = new Map();

  if (len === 0) return 0;

  let maxLen = -1;

  cnt.set(s[0], 1);

  let j = 1;

  for (let i = 0; i < len; i++) {
    while (j < len && (!cnt.get(s[j]) || cnt.get(s[j]) < 1)) {
      cnt.set(s[j], (cnt.get(s[j]) || 0) + 1);
      j++;
    }

    maxLen = Math.max(maxLen, j - i);
    cnt.set(s[i], cnt.get(s[i]) - 1);
  }

  return maxLen;
};
