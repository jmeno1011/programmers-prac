const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let max=0;
let count=0;
rl.on("line", (value) => {
  input.push(value);
}).on("close", function () {
  for(let i=0; i<input.length; i++){
    if(Number(input[i])>=max){
      max=input[i];
      count=i+1;
    }
  }
  console.log(max);
  console.log(count);
  
  process.exit();
});
