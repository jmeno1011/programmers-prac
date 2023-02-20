function solution(num_list) {
    var answer = [];
    const len = num_list.length;
    for(let i=len-1; i > -1; i--){
        answer.push(num_list[i]);
    }
    return answer;
}