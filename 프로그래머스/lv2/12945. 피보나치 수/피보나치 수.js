function solution(n) {
    var fibo = [0,1];
    var answer = 0;
    for(let i = 2; i<=n; i++){
        fibo.push((fibo[i-1]+fibo[i-2])%1234567 )
    }
    return answer = fibo[n];
}