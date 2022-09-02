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
  const index = input[0];
  for (let i = 1; i <= index; i++) {
    let n = input[i];
    const primeArr = [];
    let resultArr = [];
    for (let j = 2; j <= n; j++) {
      isPrime(j) === true && primeArr.push(j);
    }
    for (let k = 0; primeArr[k] < n / 2 + 1; k++) {
      if (primeArr.includes(n - primeArr[k])) {
        resultArr.push([primeArr[k], n - primeArr[k]]);
      }
    }
    resultArr = resultArr.pop();
    console.log(`${resultArr[0]} ${resultArr[1]}`);
  }

  process.exit();
});
