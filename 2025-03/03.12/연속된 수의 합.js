function solution(num, total) {
  const middle = total / num;
  if (num % 2) {
    return Array.from(
      { length: num },
      (_, i) => middle - Math.floor(num / 2) + i
    );
  }
  return Array.from(
    { length: num },
    (_, i) => Math.ceil(middle) - Math.floor(num / 2) + i
  );
}
