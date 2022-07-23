let input = Number(require("fs").readFileSync("/dev/stdin").toString());

let result = input;
let sum;
let count = 0;

while (true) {
  count++;
  sum = Math.floor(result / 10) + (result % 10);
  result = (result % 10) * 10 + (sum % 10);

  if (input === result) {
    break;
  }
}
console.log(count);
