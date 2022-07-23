const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let result = "";
rl.on("line", (value) => {
  input.push(value);
}).on("close", function () {
  for (let i = 0; i < input.length; i++) {
    const A = Number(input[i].split(" ")[0]);
    const B = Number(input[i].split(" ")[1]);
    if (A + B !== 0) {
      result += A + B + "\n";
    }
  }
  console.log(result);
  process.exit();
});
