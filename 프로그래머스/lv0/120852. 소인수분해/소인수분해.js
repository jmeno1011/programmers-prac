function solution(n) {
    var answer = [];
    return answer = divisor(n).filter(num => divisor(num).length === 2);
}

function divisor(n){
    const arr = [];
    let count = 1;
    while(count<=n){
        n % count === 0 && arr.push(count);
        count++;
    }
    return arr;
}