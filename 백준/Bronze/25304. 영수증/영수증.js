const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (value) => {
  input.push(value);
}).on("close", function () {
  const total = Number(input[0]);
  const index = Number(input[1]);
  let sum = 0;
  for(let i=2; i<2+index; i++){
    sum += input[i].split(" ")[0] * input[i].split(" ")[1];
  }
  if(sum===total){
    console.log("Yes");
  }else{
    console.log("No");
  }
  
  process.exit();
});