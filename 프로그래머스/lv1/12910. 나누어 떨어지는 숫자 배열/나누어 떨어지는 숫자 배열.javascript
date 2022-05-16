function solution(arr, divisor) {
    var answer = [];
    arr.map(value=>value%divisor===0?answer.push(value):"");
    answer.length!==0?answer.sort((a,b)=>a-b):answer.push(-1)
    return answer;
}