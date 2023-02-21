function solution(n) {
    var answer = 0;
    const temp = [];
    for(let i=1; i<=n; i++){
        temp.push(compoNumber(i));
    }
    return answer = temp.filter(num => num >= 3).length;
}

function compoNumber(num){
    const arr = [];
    let count = 1;
    while(count<=num){
        num % count === 0 && arr.push(count);
        count++;
    }
    return arr.length;
}