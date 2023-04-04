function solution(n) {
    var answer = 0;
    answer = n + 1;
    while(convertToBinaryOneLength(n) !== convertToBinaryOneLength(answer)){
        answer++;
    }
    return answer;
}

function convertToBinaryOneLength(n){
    let binary = (n % 2).toString();
    let num = n;
    while(num > 1){
        num = parseInt(num / 2);
        binary = (num % 2) + binary;
    }
    return binary.toString().split("").filter(str=>str==="1").length;
}