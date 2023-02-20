function solution(n) {
    var answer = 0;
    return answer = n % 7 === 0 ? n / 7 : parseInt( n / 7 ) + 1;
}