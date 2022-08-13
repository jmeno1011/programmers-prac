const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const reg = /c=|c-|dz=|d-|lj|nj|s=|z=/g;
rl.on("line", (value) => {
  const str = String(value);

  console.log(str.replace(reg, ",").length);
  rl.close();
});
