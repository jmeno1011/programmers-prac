const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (value) => {
  input.push(value);
  if (input.length === 2) {
    let H = Number(input[0].split(" ")[0]);
    let M = Number(input[0].split(" ")[1]);
    const dM = Number(input[1]);

    if (M + dM >= 60) {
      H = H + Math.floor((M + dM) / 60);
      M = (M + dM) % 60;
      if (H >= 24) {
        H = H - 24;
        console.log(`${H} ${M}`);
      } else {
        console.log(`${H} ${M}`);
      }
    } else {
      M = M + dM;
      console.log(`${H} ${M}`);
    }

    rl.close();
  }
});
