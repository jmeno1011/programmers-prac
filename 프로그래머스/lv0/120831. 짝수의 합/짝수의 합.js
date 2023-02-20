function solution(n) {
    var answer = 0;
    const len = parseInt(n / 2);
    for(let i=1; i<=len; i++){
        answer += 2 * i
    }
    return answer;
}