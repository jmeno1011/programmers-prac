function solution(n) {
    var answer = 0;
    let count = 1;
    while(count <= n){
        n % count === 0 && answer++;
        count++;
    }
    return answer;
}