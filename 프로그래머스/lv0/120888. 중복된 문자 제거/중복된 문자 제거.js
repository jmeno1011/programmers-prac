function solution(my_string) {
    var answer = '';
    const temp = [];
    const strArr = my_string.split("");
    strArr.map(str => !temp.includes(str) && temp.push(str));
    return answer = temp.join("");
}