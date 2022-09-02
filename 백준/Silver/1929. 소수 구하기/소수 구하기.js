const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isPrime = (value) => {
  for (let i = 2; i * i <= value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};

rl.on("line", (value) => {
  const M = Number(value.split(" ")[0]);
  const N = Number(value.split(" ")[1]);
  const numberArr = [];
  
  for (let i = M; i <= N; i++) {
    numberArr.push(i);
  }

  for (value of numberArr) {
    if (Number(value) === 0) {
      continue;
    } else if (Number(value) === 1) {
      continue;
    } else {
      isPrime(value) === true && console.log(value);
    }
  }

  rl.close();
});
