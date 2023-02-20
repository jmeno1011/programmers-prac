function solution(n) {
    var answer = 0;
    const arr = String(n).split("")
    return answer = arr.reduce((prev,curr)=>Number(prev)+Number(curr), 0);
}