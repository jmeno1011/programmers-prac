function solution(arr) {
    var answer = [];
    var temp = Math.min(...arr);
    answer = arr.filter(item=>item!==temp);
    return answer.length===0?[-1]:answer;
}