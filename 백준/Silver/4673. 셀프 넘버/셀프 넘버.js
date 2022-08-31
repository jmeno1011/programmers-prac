const num = 10000;
const standardArray = Array(num).fill().map((v,i)=>i+1);
const notSelfNumber = []

let n = 1;
while(n<=num){
    let str = String(n)
    let sum = n
    for(let i=0; i<str.length; i++){
        sum += Number(str[i])
    }
    notSelfNumber.push(sum)
    n++;
}
const selfNumber = standardArray.filter(v=>!notSelfNumber.includes(v));
selfNumber.forEach(ele => console.log(ele) );