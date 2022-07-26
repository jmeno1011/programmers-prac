const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let result =0;
rl.on("line", (value) => {
  input.push(value);
}).on("close", function () {
  
  const arr = input[1].split(" ")
  const M = Math.max(...arr);
  for(let i=0; i<arr.length; i++){
    result += arr[i]/M*100
  }
  result = result / Number(input[0])
  console.log(result);

  process.exit();
});
