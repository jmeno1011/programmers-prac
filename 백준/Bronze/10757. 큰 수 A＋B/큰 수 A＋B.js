const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = 0;
rl.on("line", (value) => {
  const A = BigInt(value.split(" ")[0]);
  const B = BigInt(value.split(" ")[1]);
  result = A + B;
  console.log(String(result).split("n")[0]);
  rl.close();
});
