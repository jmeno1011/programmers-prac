function solution(arr)
{
    var answer = [];
    arr.map((value, index)=>value===arr[index+1]?false:answer.push(value))
    
    return answer;
}