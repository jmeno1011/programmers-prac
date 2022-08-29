const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;

rl.on("line", (value) => {
  const N = Number(value);

  for (let i = 1; i <= N; i++) {
    i = i.toString()
    if (1 <= i && i <= 99) {
      count++;
    } else {
      const A = Number(i.split("")[0]);
      const B = Number(i.split("")[1]);
      const C = Number(i.split("")[2]);
      count = A - B === B - C ? count + 1 : count;
    }
  }

  console.log(count);

  rl.close();
});
