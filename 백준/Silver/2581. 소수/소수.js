const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const isPrime = (value) => {
  for (let i = 2; i * i <= value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};

rl.on("line", (value) => {
  input.push(value);
}).on("close", function () {
  const M = Number(input[0]);
  const N = Number(input[1]);
  const numberArr = [];
  const primeArr = [];

  for (let i = M; i <= N; i++) {
    numberArr.push(i);
  }

  for (value of numberArr) {
    if (Number(value) === 0) {
      continue;
    } else if (Number(value) === 1) {
      continue;
    } else {
      isPrime(value) === true ? primeArr.push(value): true;
    }
  }
  if (primeArr.length === 0) {
    console.log(-1);
  } else {
    console.log(primeArr.reduce((a, b) => a + b, 0));
    console.log(Math.min(...primeArr));
  }

  process.exit();
});
