function solution(numbers) {
    var answer = [];
    for(let i=1; i<numbers.length; i++){
        for(let j=0; j<i; j++){
            answer.push(numbers[numbers.length-i-1]+numbers[numbers.length-j-1])        }
    }
    answer = [...new Set(answer)].sort((a,b)=>a-b)
    return answer;
}