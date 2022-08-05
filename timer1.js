// Arguments are submitted through command line

const alarmClock = (array) => {
  array.forEach((item) => {
    if (!isNaN(item) && item > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, (item * 1000));
    }
  });
};

alarmClock(process.argv.slice(2));

