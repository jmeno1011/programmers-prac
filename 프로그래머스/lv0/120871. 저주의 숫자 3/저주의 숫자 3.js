function solution(n) {
    var answer = 0;
    let count = 0;
    while(count<n){
        count++;
        answer++;
        
        while(answer % 3 === 0 || String(answer).includes("3")){
            answer++;
        }
    }
    return answer;
}