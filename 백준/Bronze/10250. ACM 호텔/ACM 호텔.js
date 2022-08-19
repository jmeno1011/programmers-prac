const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (value) => {
  input.push(value);
}).on("close", function () {
  const index = Number(input[0]);

  for (let i = 1; i <= index; i++) {
    const H = Number(input[i].split(" ")[0]);
    const W = Number(input[i].split(" ")[1]);
    const N = Number(input[i].split(" ")[2]);
    const Y = N % H === 0 ? H : N % H;
    const X = Math.ceil(N / H);
    const result = X < 10 ? `${Y}0${X}` : `${Y}${X}`
    console.log(result);
  }

  process.exit();
});
