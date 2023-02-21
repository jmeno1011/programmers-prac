function solution(n, numlist) {
    var answer = [];
    return answer = numlist.filter(num => num%n === 0 && num);
}