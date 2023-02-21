function solution(age) {
    var answer = '';
    const standard = ["a","b","c","d","e","f","g","h","i","j"];
    const numArr = String(age).split("");
    for(const num of numArr){
        answer += standard[Number(num)];
    }
    return answer;
}