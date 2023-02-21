function solution(n) {
    var answer = [];
    let count = 1;
    while(count <= n){
        n % count === 0 && answer.push(count);
        count++;
    }
    return answer;
}