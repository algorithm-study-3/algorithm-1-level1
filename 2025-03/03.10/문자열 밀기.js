function solution(A, B) {
  var answer = 0;
  const AArray = A.split('');
  while (B !== AArray.join('')) {
    AArray.unshift(AArray.pop());
    answer += 1;
    if (answer === A.length) {
      answer = -1;
      break;
    }
  }
  return answer;
}
