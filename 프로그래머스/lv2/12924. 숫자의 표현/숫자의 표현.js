function solution(n) {
    var answer = 0;
    for(let i = 1; i<=n; i++){
        let minus = i;
        let num = n;
        while(num > minus){
            // if(num === minus) break;
            num -= minus;
            minus++;
        }
        if(num-minus===0) {
            answer++;
        }
    }
    return answer;
}