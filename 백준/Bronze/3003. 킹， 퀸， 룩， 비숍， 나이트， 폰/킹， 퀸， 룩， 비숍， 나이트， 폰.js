const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const chess = [1, 1, 2, 2, 2, 8];
let result = "";

rl.on("line", (value) => {
  input.push(value);
}).on("close", function () {
  let arr = [];
  arr = input[0].split(" ");
  chess.map((v, i) => (result += (v - arr[i]).toString() + " "));
  console.log(result);
  process.exit();
});