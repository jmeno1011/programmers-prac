const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let result = 0;
rl.on("line", (value) => {
  input.push(value);
}).on("close", function () {
  const index = input[0];
  for (let i = 1; i <= index; i++) {
    const arr = input[i];
    let temp = [];

    for (char of arr) {
      if (!temp.includes(char) || temp[temp.length - 1] === char) {
        temp.push(char);
      } else {
        break;
      }
    }
    if(arr===temp.join("")){
      result++
    }
  }
  console.log(result);

  process.exit();
});
