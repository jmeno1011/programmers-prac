const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let result = "";
rl.on("line", (input) => {
  for (let i = 1; i <= input; i++) {
    let star = "";
    for (let j = 0; j < i; j++) {
      star += "*";
    }
    result += star + "\n";
  }
  console.log(result);
  rl.close();
});
