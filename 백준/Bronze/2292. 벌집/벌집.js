const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (value) => {
  let bee = 1;
  let count = 0;
  const num = value;
  while (true) {
    if (num > bee) {
      count++;
      bee += count * 6;
    } else {
      count++;
      console.log(count);
      break;
    }
  }
  rl.close();
});
