function solution(my_string) {
    var answer = 0;
    const reg = /[0-9]/g;
    const arr = my_string.match(reg);
    return answer = arr.reduce(
        (prev, curr)=>Number(prev)+Number(curr)
    ,0);
}