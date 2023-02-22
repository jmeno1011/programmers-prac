function solution(array) {
    var answer = 0;
    return answer = array.join("").split("").filter(num=> Number(num)===7).length;
}