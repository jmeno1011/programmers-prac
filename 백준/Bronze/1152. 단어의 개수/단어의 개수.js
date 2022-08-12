const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (value) => {

  const strArr = value.split(" ").filter(v=>v.length!==0);
  console.log(strArr.length);

  rl.close();
});