function solution(s) {
    var answer = '';
    answer = s.split(" ").map(value=>value.split("").map((value,index)=>index%2===0?value.toUpperCase():value.toLowerCase()).join("")).join(" ")
    return answer;
}