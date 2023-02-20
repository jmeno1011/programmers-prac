function solution(hp) {
    var answer = 0;
    while(5 <= hp){
        hp -= 5;
        answer++;
    }
    while(3 <= hp){
        hp -= 3;
        answer++;
    }
    return answer = hp === 0 ? answer : answer + hp;
}