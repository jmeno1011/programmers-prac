const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.on("line", (value) => {
    let H = Number(value.split(" ")[0]);
    let M = Number(value.split(" ")[1]);
    
    if(M-45<0){
        H = H -1;
        M = M - 45 + 60;
        if(H<0){
            H = H + 24;
            console.log(`${H} ${M}`);
        }else{
            console.log(`${H} ${M}`);
        }
    }else{
        M = M -45;
        console.log(`${H} ${M}`);
    }
    rl.close();
});
