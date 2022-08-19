const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (value) => {
  const A = Number(value.split(" ")[0]);
  const B = Number(value.split(" ")[1]);
  const V = Number(value.split(" ")[2]);

  let count = Math.floor((V-A-1)/(A-B))+2

  console.log(count);

  rl.close();
});
