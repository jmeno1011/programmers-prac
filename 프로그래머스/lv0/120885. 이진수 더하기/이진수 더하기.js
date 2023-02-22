function solution(bin1, bin2) {
    var answer = '';
    const num = binaryToConvert(bin1) + binaryToConvert(bin2);
    return answer = convertToBinary(num);
}

function convertToBinary(n){
    let binary = (n % 2).toString();
    let num = n;
    while(num > 1){
        num = parseInt(num / 2);
        binary = (num % 2) + binary;
    }
    return binary;
}

function binaryToConvert(n){
    const numArr = n.split("").reverse();
    let result = 0;
    for(let i = 0; i<numArr.length; i++){
        if(i===0){
            result = result + Number(numArr[i]);
        }
        if(Number(numArr[i]) ===1 && i > 0){
            let num = 1;
            for(let j=0; j<i; j++){
                num *= 2;    
            }
            result = result + num;
        }
    }
    return result;
}