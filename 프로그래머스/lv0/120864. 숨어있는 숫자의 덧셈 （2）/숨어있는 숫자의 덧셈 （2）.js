function solution(my_string) {
    var answer = 0;
    const numArr = my_string.split(/[^0-9]/g).filter(num=> num !=='');
    return answer = numArr.reduce((prev,curr)=>Number(prev)+Number(curr),0);
}