const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (value) => {
  const NUM = Number(value);

  for(let i=1; i<=9; i++){
    console.log(`${NUM} * ${i} = ${NUM * i}`)
  }
  
  rl.close();
});
