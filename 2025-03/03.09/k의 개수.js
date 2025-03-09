function solution(i, j, k) {
  var answer = 0;
  for (let n = i; n <= j; n++) {
    String(n)
      .split('')
      .forEach((number) => {
        if (number === String(k)) answer += 1;
      });
  }
  return answer;
}
