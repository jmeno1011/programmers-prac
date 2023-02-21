function solution(order) {
    var answer = 0;
    const numArr = String(order).split("")
    for(const num of numArr){
        if(Number(num) !== 0){
            Number(num) % 3 === 0 && answer++;    
        }
    }
    return answer;
}