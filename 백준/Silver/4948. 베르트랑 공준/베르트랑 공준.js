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
  for (let i = 0; i < input.length; i++) {
    const n = Number(input[i]);
    if(n===0) break;
    const numberArr = [];
    const primeArr = [];
    for (let i = n; i <= 2 * n; i++) {
      if(i===n) continue;
      numberArr.push(i);
    }
    for (value of numberArr) {
      if (Number(value) === 0) {
        continue;
      } else if (Number(value) === 1) {
        continue;
      } else {
        isPrime(value) === true && primeArr.push(value);
      }
    }
    console.log(primeArr.length);
  }

  process.exit();
});
