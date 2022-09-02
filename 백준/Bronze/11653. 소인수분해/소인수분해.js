const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;

rl.on("line", (value) => {
  let N = Number(value);
  if(N===1){
    console.log();
  }else{
    for(let i=2; i<=N; i++){
      while(N%i===0){
        N /= i;
        console.log(i);
      }
    }
  }

  rl.close();
});
