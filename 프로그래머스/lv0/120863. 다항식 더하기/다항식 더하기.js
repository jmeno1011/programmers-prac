function solution(polynomial) {
    var answer = '';
    const numRex = /[^0-9]/g;
    const arr = polynomial.split(" ").join("").split("+")
    let numArr = arr.filter(str => !str.includes('x'));
    numArr = numArr.reduce((prev, curr)=>Number(prev)+Number(curr),0);
    let varArr = arr.filter(str => str.includes('x'));
    varArr = varArr.map(str => str.split(numRex)[0]=== ''
               ? 1 : Number(str.split(numRex)[0])
              )
    varArr = varArr.reduce((prev, curr)=>prev+curr,0) + "x"
    varArr = varArr === "1x" ? "x" : varArr;
    if(varArr !== "0x" && numArr !== 0){
        return `${varArr} + ${numArr}`
    }else if(numArr === 0){
        return varArr;
    }else if(varArr === "0x"){
        return String(numArr);
    }
}