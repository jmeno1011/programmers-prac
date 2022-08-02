const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (value) => {
  input.push(value);
}).on("close", function () {
  const arr = input;
  const arrLen = input[0];
for (let i = 1; i <= arrLen; i++) {
  let result = "";
  const strArrs = arr[i].split(" ");
  const strArrsLen = strArrs[0];
  const strArr = strArrs[1].split("");
  const strArrLen = strArr.length;
  for (let j = 0; j < strArrLen; j++) {
    for (let k = 0; k < strArrsLen; k++) {
        result += strArr[j];
    }
  }
  console.log(result);
}
  process.exit();
});