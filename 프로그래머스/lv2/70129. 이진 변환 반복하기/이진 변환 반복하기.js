function solution(s) {
    var answer = [];
    let zero = 0;
    let count = 0;
    while(s !== "1"){
        s = s.split("");
        zero += s.filter(char => char === "0").length;
        count++;
        s = convertToBinary(s.filter(char=> char === "1").length);
    }
    
    return answer = [count, zero];
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