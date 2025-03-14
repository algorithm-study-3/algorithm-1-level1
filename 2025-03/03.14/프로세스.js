function solution(priorities, location) {
  var answer = 0;
  while (priorities.length !== 0) {
    const current = priorities.shift();
    location -= 1;

    if (Math.max(current, ...priorities) !== current) {
      priorities.push(current);
      if (location === -1) location = priorities.length - 1;
      continue;
    }

    answer += 1;
    if (location === -1) break;
  }
  return answer;
}
