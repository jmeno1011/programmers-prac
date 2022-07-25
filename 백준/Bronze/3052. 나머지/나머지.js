const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (value) => {
  input.push(value);
}).on("close", function () {
  
  const arr = input.map(v=>Number(v)%42);
  const set = new Set(arr);
  console.log(set.size);

  process.exit();
});
