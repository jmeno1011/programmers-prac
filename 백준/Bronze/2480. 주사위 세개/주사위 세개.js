const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (value) => {
  const arr = value.split(" ").map(v=>Number(v))
  const set = new Set(arr);

  if(set.size===3){
    console.log(Math.max(...arr)*100);
  }else if(set.size===2){
    const duplicates = findDuplicates(arr)
    console.log(1000+duplicates[0]*100);
  }else if(set.size===1){
    const duplicates = findDuplicates(arr)
    console.log(10000+duplicates[0]*1000);
  }
  rl.close();
});

function findDuplicates(arr){
  const distinct = new Set(arr);
  const filtered = arr.filter(item=>{
    if(distinct.has(item)){
      distinct.delete(item)
    }else{
      return item;
    }
  });
  return [... new Set(filtered)]
}