const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (value) => {
  const n = Number(value);
  const arr = [0];
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      arr.push(1);
    } else {
      arr.push(Number(arr[i - 1]) + Number(arr[i - 2]));
    }
  }

  console.log(arr[n]);
  rl.close();
});
