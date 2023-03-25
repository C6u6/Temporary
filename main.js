function Timer(time) {
  const arLength = Array.from({length: time});
  const arFromTimeTo1 = arLength.map((_, index) => {
    return time - index;
  });
  const timeDownArray = [...arFromTimeTo1,0];
  function countDown() {
    let i = 0;
    const interval = setInterval(() => {
      console.log('running with ' + timeDownArray[i] + ' seconds');
      if (timeDownArray[i] == undefined) {
        clearInterval(interval);
        return;
      }
      document.querySelector('div').innerText = timeDownArray[i];
      i++;
    }, 1000);
    return interval;
  };
  let timesCountDownGetCalled = 0;
  let intervalFromCountDown;
  document.querySelector('button').addEventListener('click', () => {
    if (timesCountDownGetCalled > 0) {
      clearInterval(intervalFromCountDown);
      timesCountDownGetCalled = 0;
    }
    intervalFromCountDown = countDown();
    timesCountDownGetCalled++;
  });
};

Timer(5);
