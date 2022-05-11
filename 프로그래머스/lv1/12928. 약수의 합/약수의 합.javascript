function solution(n) {
    var answer = 0;
    var temp = 1;
    while(temp<=n){
        if(n%temp===0){
            answer += temp;
            temp++;
        }else{
            temp++;
        }
    }
    return answer;
}
