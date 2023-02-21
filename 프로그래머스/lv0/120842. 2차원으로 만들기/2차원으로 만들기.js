function solution(num_list, n) {
    var answer = [[]];
    const len = num_list.length / n;
    for(let i = 0; i < len; i++){
        answer[i] = [];
        for(let j=0; j < n; j++){
            answer[i].push(num_list[n*i + j]);
        }
    }
    return answer;
}