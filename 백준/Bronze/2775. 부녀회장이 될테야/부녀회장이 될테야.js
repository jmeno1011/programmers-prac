const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (value) => {
  input.push(value);
}).on("close", function () {
  const index = input[0];

  for (let i = 0; i < index; i++) {
    let k = Number(input[2 * i + 1]);
    let n = Number(input[2 * i + 2]);
    let arr = Array(n)
      .fill()
      .map((v, i) => i + 1);
    for (let x = 0; x < k; x++) {
      arr = arr.map((v, i) =>
        arr.slice(0, i + 1).reduce((pre, cur) => pre + cur, 0)
      );
    }
    console.log(arr[n - 1]);
  }

  process.exit();
});
