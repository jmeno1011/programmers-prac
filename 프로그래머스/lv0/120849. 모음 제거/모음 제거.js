function solution(my_string) {
    var answer = '';
    const rex = /a|e|i|o|u/;
    let arr = my_string.split("");
    return answer = arr.filter(str => !rex.test(str)).join("");
}