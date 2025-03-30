function solution(phone_book) {
  var answer = true;

  const n = phone_book.length;
  phone_book.sort((a, b) => b.length - a.length);

  const set = new Set(phone_book);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < phone_book[i].length; j++) {
      const str = phone_book[i].slice(0, j);
      if (set.has(str)) return false;
    }
  }

  return answer;
}
