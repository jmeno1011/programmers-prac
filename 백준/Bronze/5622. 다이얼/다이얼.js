const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const key = ["","ABC","DEF","GHI","JKL","MNO","PQRS","TUV","WXYZ","0"];
let sum = 0;
rl.on("line", (value) => {

  const strArr = value.split("");
  
  for(let el of strArr){
    const temp = key.filter(v=>v.includes(el))
    for(let ele of temp){
      const idx = key.indexOf(ele);
      sum += idx+2
    }
  }

  console.log(sum);

  rl.close();
});
