function solution(n) {
    var answer = 0;
    return answer = (n * 6)/gcd(n, 6) / 6;
}

function gcd(a, b){
    while( b > 0 ){
        let temp = a;
        a = b;
        b = temp % b;
    }
    return a
}