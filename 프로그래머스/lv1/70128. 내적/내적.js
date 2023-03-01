function solution(a, b) {
    var answer = 1234567890;
    a = a.map((n,i)=> n*b[i]);
    return answer = a.reduce((prev,curr)=>prev+curr,0);
}