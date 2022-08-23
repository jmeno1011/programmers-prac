const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = 1;
rl.on("line", (value) => {
  const N = Number(value);
  if(N===0){
    result = 1;
  }else{
    for(let i=1; i<=N; i++){
      result *= i;
    }
  }

  console.log(result);

  rl.close();
});
