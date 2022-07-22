const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (value) => {
  input.push(value);
  if (input.length === (Number(input[0])+1)) {
    for(let i=1; i<input.length; i++){
      const A = Number(input[i].split(" ")[0])
      const B = Number(input[i].split(" ")[1])
      console.log(A+B)
    }
    rl.close();
  }
});
