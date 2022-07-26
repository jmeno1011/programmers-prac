let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const C = Number(input[0]);
for (let i = 1; i <= C; i++) {
  let result = 0;
  let count = 0;
  const arr = input[i].split(" ");
  const num = Number(arr[0]);
  const M =
    arr.slice(1, num + 1).reduce((pre, cur) => Number(pre) + Number(cur), 0) /
    num;
  for (let j = 1; j < arr.length; j++) {
    if (Number(arr[j]) > Number(M)) {
      count++;
    }
  }
  result = (count / num) * 100;
  console.log(result.toFixed(3) + "%");
}
