const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (value) => {
  input.push(value);
}).on("close", function () {
  for (let i = 1; i <= input[0]; i++) {
    let result = 0;
    let count = 0;
    let arr = input[i].split("");
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === "O") {
        count++;
      } else {
        count = 0;
      }
      result += count;
    }
    console.log(result);
  }

  process.exit();
});
