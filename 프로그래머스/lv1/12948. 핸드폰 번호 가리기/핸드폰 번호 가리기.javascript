function solution(phone_number) {
    var answer = '';
    const star = phone_number.slice(0,-4);
    for(let i=0; i<star.length; i++){
        answer += "*";
    }
    answer = answer + phone_number.slice(star.length);
    return answer;
}