function solution(num, k) {
    var answer = 0;
    const numArr = String(num).split("").map(num => Number(num));
    const index = numArr.findIndex(num => num === k);
    return answer = index === -1 ? -1 : index+1;
}