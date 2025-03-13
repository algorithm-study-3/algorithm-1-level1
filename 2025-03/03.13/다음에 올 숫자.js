function solution(common) {
  if (common[2] - common[1] === common[1] - common[0]) {
    const commonDifference = common[1] - common[0];
    return common.pop() + commonDifference;
  }
  const commonRatio = common[1] / common[0];
  return common.pop() * commonRatio;
}
