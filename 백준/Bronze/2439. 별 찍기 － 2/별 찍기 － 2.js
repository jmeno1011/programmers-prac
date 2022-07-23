const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let result = "";
rl.on("line", (input) => {
  const M = Number(input);
  for (let x = 1; x <= M; x++) {
    let star = "";
    let blank = "";
    for (let y = M - x; y >= 1; y--) {
      blank += " ";
    }
    for (let z = 0; z < x; z++) {
      star += "*";
    }
    result += blank + star + "\n";
  }
  console.log(result);
  rl.close();
});
