function solution(my_string, n) {
    var answer = '';
    const myStringArr = my_string.split("");
    for(let i = 0; i < myStringArr.length; i++){
        for(let j = 0; j < n; j++){
            answer += myStringArr[i];
        }
    }
    return answer;
}