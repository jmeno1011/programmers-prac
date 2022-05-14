function solution(a, b) {
    var answer = 0;
    if(a>b){
        var temp = b;
        b=a;
        a=temp;
    }
    for(let i=a; i<=b; i++){
        answer +=i;
    }
    return answer;
}