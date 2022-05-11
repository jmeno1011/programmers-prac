function solution(n) {
    var answer = [];
    String(n).split("").reverse().map(value=>answer.push(Number(value)))
    return answer;
}