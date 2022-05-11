function solution(n)
{
    var answer = 0;
    return String(n).split("").reduce((sum, value)=> (sum + Number(value)),answer)
}