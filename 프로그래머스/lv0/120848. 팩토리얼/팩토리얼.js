function solution(n) {
    var answer = 0;
    let fac = 1;
    let count = 1;
    while(fac <= n){
        count++;
        fac *= count;
    }
    
    return answer = count -1;
}