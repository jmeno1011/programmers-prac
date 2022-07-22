const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (value) => {
  const NUM = Number(value);
  let sum = 0

  for(let i=1; i<=NUM; i++){
    sum += i
  }
  console.log(sum);
  
  rl.close();
});
