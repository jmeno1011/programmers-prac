function solution(my_string) {
    var answer = '';
    const strArr = my_string.split("").map(str => str.toLowerCase());
    return answer = strArr.sort().join("");
}