function solution(my_str, n) {
    var answer = [];
    const index = Math.ceil(my_str.length / n);
    for(let i = 0; i<index; i++){
        answer.push(my_str.slice(i*n, (i+1)*n));
    }
    return answer;
}