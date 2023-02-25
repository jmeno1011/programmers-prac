function solution(num, total) {
    var answer = [];
    let count = 0;
    let init = 0;
    for(let i = 1; i < num; i++){
        count += i;
    }
    if((total - count) % num === 0){
        init = (total - count) / num;
    }else{
        init = (total - count) / num  - (total - count) % num
    }
    
    for(let i = 0; i <num; i++){
        answer.push(init +i)
    }
    
    return answer;
}