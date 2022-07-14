const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  console.log(Number(input.split(" ")[0]) + Number(input.split(" ")[1]));
  console.log(Number(input.split(" ")[0]) - Number(input.split(" ")[1]));
  console.log(Number(input.split(" ")[0]) * Number(input.split(" ")[1]));
  console.log(
    Math.floor(Number(input.split(" ")[0]) / Number(input.split(" ")[1]))
  );
  console.log(Number(input.split(" ")[0]) % Number(input.split(" ")[1]));
  rl.close();
});
