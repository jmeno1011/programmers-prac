const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let result = 0;

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
  const inputArr = input[1].split(" ");

  for (value of inputArr) {
    if (Number(value) === 0) {
      result = result;
    } else if (Number(value) === 1) {
      result = result;
    } else {
      result = isPrime(value) === true ? result + 1 : result;
    }
  }
  console.log(result);

  process.exit();
});
