let input = require("fs").readFileSync("/dev/stdin").toString().split("");

let result = "";
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

for (let i = 0; i < alphabet.length; i++) {
  if (input.includes(alphabet[i])) {
    result += input.findIndex((el) => el === alphabet[i]) + " ";
  } else {
    result += "-1" + " ";
  }
}

console.log(result);
