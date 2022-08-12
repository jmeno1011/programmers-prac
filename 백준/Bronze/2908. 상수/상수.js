const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (value) => {

  const strArr = value.split(" ");
  const arr = [];
  for(el of strArr){
    const num = el.split("").reverse().join("")
    arr.push(Number(num))
  }
  const max = Math.max(...arr);
  console.log(max);

  rl.close();
});
