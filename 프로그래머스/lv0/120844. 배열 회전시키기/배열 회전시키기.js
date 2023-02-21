function solution(numbers, direction) {
    var answer = [];
    if(direction === "right"){
        const temp = numbers.pop();
        answer = [temp, ...numbers];
    }else{
        const temp = numbers.shift();
        answer = [...numbers, temp];
    }
    return answer;
}