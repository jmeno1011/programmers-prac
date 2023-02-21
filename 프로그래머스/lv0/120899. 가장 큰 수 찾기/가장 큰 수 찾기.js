function solution(array) {
    var answer = [];
    const max = Math.max(...array);
    const index = array.findIndex(num => num === max);
    return answer = [max, index];
}