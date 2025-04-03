const getPopularMovies = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, '외부 API 접근한 결괏값');
});

// 아래에 답안을 작성하세요
const makeError = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('대기 시간이 오래 걸립니다.'));
  }, 3000);
});

Promise.race([getPopularMovies, makeError])
  .then((result) => {
    console.log('결과: ', result);
  })
  .catch((error) => {
    console.error(error.message);
  });
