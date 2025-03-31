function solution(operations) {
  const freq = new Map();

  const insert = (num) => {
    freq.set(num, (freq.get(num) || 0) + 1);
  };

  const deleteMax = () => {
    if (freq.size === 0) return;
    const keys = Array.from(freq.keys());
    const max = Math.max(...keys);
    if (freq.get(max) === 1) {
      freq.delete(max);
    } else {
      freq.set(max, freq.get(max) - 1);
    }
  };

  const deleteMin = () => {
    if (freq.size === 0) return;
    const keys = Array.from(freq.keys());
    const min = Math.min(...keys);
    if (freq.get(min) === 1) {
      freq.delete(min);
    } else {
      freq.set(min, freq.get(min) - 1);
    }
  };

  for (const op of operations) {
    const [cmd, numStr] = op.split(' ');
    if (cmd === 'I') {
      insert(parseInt(numStr, 10));
    } else if (cmd === 'D') {
      if (numStr === '1') {
        deleteMax();
      } else if (numStr === '-1') {
        deleteMin();
      }
    }
  }

  if (freq.size === 0) {
    return [0, 0];
  } else {
    const keys = Array.from(freq.keys());
    return [Math.max(...keys), Math.min(...keys)];
  }
}
