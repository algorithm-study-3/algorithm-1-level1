let [n, arr] = require('fs').readFileSync('input.txt').toString().split('\n');
n = parseInt(n);
arr = arr.split(' ').map(Number);

let dp1 = [];
dp1[0] = 1;

for (let i = 1; i < n; i++) {
  dp1[i] = 1;
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      dp1[i] = Math.max(dp1[j] + 1, dp1[i]);
    }
  }
}

let dp2 = [];
dp2[n - 1] = 1;
for (let i = n - 1; i >= 0; i--) {
  dp2[i] = 1;
  for (let j = n - 1; j > i; j--) {
    if (arr[i] > arr[j]) {
      dp2[i] = Math.max(dp2[j] + 1, dp2[i]);
    }
  }
}

let sum = [];
for (let i = 0; i < n; i++) {
  sum[i] = dp1[i] + dp2[i] - 1;
}
console.log(Math.max(...sum));
