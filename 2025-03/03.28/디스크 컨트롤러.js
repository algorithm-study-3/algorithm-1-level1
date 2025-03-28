function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]);

  let currentTime = 0;
  let totalTurnaround = 0;
  let count = 0;
  let idx = 0;
  let waitingQueue = [];

  while (count < jobs.length) {
    if (
      waitingQueue.length === 0 &&
      idx < jobs.length &&
      jobs[idx][0] > currentTime
    ) {
      currentTime = jobs[idx][0];
    }

    while (idx < jobs.length && jobs[idx][0] <= currentTime) {
      waitingQueue.push(jobs[idx]);
      idx++;
    }

    if (waitingQueue.length > 0) {
      waitingQueue.sort((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1];
        return a[0] - b[0];
      });

      let job = waitingQueue.shift();
      currentTime += job[1];
      totalTurnaround += currentTime - job[0];
      count += 1;
    }
  }

  return Math.floor(totalTurnaround / jobs.length);
}
