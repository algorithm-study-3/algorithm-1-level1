const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', (line) => {
    input.push(line.split(' ').map(Number));
  })
  .on('close', () => {
    const [N, S, M] = input[0];
    const differences = input[1];

    let dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(false));

    dp[0][S] = true;

    for (let i = 1; i <= N; i++) {
      const diff = differences[i - 1];
      for (let vol = 0; vol <= M; vol++) {
        if (dp[i - 1][vol]) {
          if (vol + diff <= M) {
            dp[i][vol + diff] = true;
          }
          if (vol - diff >= 0) {
            dp[i][vol - diff] = true;
          }
        }
      }
    }

    let answer = -1;
    for (let vol = 0; vol <= M; vol++) {
      if (dp[N][vol]) answer = vol;
    }
    console.log(answer);
    process.exit();
  });
