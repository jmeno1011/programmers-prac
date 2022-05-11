function solution(arr) {
    var answer = 0;
    answer = arr.reduce((sum,value)=>sum+value, answer)/arr.length
    return answer;
}