function solution(left, right) {
    var answer = 0;
    for(let i = left; i<=right; i++){
        if(dividerNum(i)%2===0){
            answer += i;
        }else{
            answer -= i;
        }
    }
    return answer;
}
function dividerNum(n) {
    var count = 0;
    var temp = 1;
    while(temp<=n){
        if(n%temp===0){
            count++;
            temp++;
        }else{
            temp++;
        }
    }
    return count;
}