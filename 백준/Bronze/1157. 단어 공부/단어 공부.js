const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (value) => {

  const strArr = value.toLowerCase().split("");
  const strUnique = [...new Set(strArr)];
  const arr = new Array(strUnique.length).fill(0);

  for(let el of strArr){
    const idx = strUnique.indexOf(el);
    arr[idx]++;
  }
  
  const max = Math.max(...arr);
  if(arr.filter(v=>v===max).length>1){
    console.log("?");
  }else{
    const arrIdx = arr.indexOf(max);
    console.log(String(strUnique[arrIdx]).toUpperCase());
  }
  rl.close();
});
