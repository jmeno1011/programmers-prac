function solution(balls, share) {
    var answer = 0;
    
    return answer = Math.round(fac(balls) / (fac(balls - share) * fac(share)));
}

function fac(n){ 
    let count = 1;
    let result = 1;
    while(count <= n){
        result *= count;
        count++;
    }
    return result;
}