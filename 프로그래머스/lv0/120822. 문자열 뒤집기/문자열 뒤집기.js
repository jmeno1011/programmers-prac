function solution(my_string) {
    var answer = '';
    const strArr = my_string.split("");
    const tempArr = [];
    const len = strArr.length;
    for(let i = len - 1; i > -1; i--){
        tempArr.push(strArr[i]);
    }
    return answer = tempArr.join("");
}