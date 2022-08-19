const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (value) => {
  const number = value;
  let num = value;
  let count = 0;
  while (num > 0) {
    count++;
    num -= count;
  }
  const arr = new Array(count).fill().map((v, index) => index + 1);
  const index =
    number - (Number(arr.reduce((pre, cur) => pre + cur, 0)) - count) - 1;
  if (count % 2 === 1) {
    const top = arr.reverse()[index];
    const bottom = arr.reverse()[index];
    console.log(`${top}/${bottom}`);
  } else {
    const top = arr[index];
    const bottom = arr.reverse()[index];
    console.log(`${top}/${bottom}`);
  }
  rl.close();
});
