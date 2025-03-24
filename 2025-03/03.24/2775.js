const fs = require('fs');

// 입력을 받기 위한 코드 (백준 환경에서는 '/dev/stdin' 사용)
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

// 테스트 케이스 수
const T = parseInt(input[0]);

// 각 테스트 케이스 처리
let line = 1; // 입력 줄 인덱스
for (let t = 0; t < T; t++) {
  const k = parseInt(input[line++]); // 층 수
  const n = parseInt(input[line++]); // 호 수

  // DP 배열 초기화 (0층부터 k층까지, 1호부터 n호까지)
  let dp = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(0));

  // 0층 초기화: 0층 i호에는 i명
  for (let i = 1; i <= n; i++) {
    dp[0][i] = i;
  }

  // 1층부터 k층까지 계산
  for (let floor = 1; floor <= k; floor++) {
    for (let room = 1; room <= n; room++) {
      dp[floor][room] = dp[floor - 1].slice(1, room + 1).reduce((a, b) => a + b, 0);
    }
  }

  // 결과 출력
  console.log(dp[k][n]);
}
