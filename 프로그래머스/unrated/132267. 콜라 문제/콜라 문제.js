function solution(a, b, n) {
    var answer = 0;
    answer = parseInt(n / a) * b;
    n = parseInt(n/a)*b + n%a;
    
    while(n>=a){
        answer += parseInt(n / a) * b;
        n = parseInt(n/a) * b + n%a;
    }
    return answer;
}