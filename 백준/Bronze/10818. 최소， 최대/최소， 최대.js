const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (value) => {
  input.push(value);
}).on("close", function () {
  const arr = input[1].split(" ");

  console.log(`${Math.min(...arr)} ${Math.max(...arr)}`);
  process.exit();
});
