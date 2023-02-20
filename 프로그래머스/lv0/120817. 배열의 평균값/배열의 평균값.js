function solution(numbers) {
    var answer = 0;
    const len = numbers.length;
    const sum = numbers.reduce((prev,curr)=>prev+curr, 0);
    return answer = (sum / len) % 0.5 === 0 ? sum / len : false;
}