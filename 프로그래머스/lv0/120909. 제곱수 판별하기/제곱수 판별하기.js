function solution(n) {
    var answer = 0;
    let count = 1;
    while(count*count <= n){
        answer = count * count === n ? 1 : 2;
        count++;
    }
    return answer;
}