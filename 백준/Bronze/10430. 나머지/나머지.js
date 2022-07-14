const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const A = Number(input.split(" ")[0]);
  const B = Number(input.split(" ")[1]);
  const C = Number(input.split(" ")[2]);
  console.log((A + B) % C);
  console.log(((A % C) + (B % C)) % C);
  console.log((A * B) % C);
  console.log(((A % C) * (B % C)) % C);
  rl.close();
});
