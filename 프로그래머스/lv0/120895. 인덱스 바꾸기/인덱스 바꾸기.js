function solution(my_string, num1, num2) {
    var answer = '';
    const strArr = my_string.split("");
    const str1 = strArr[num1];
    const str2 = strArr[num2];
    strArr[num1] = str2;
    strArr[num2] = str1;
    return answer = strArr.join("");
}