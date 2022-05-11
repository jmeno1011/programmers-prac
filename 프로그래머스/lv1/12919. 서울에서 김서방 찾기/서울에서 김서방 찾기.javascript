function solution(seoul) {
    var answer = '';
    seoul.includes('Kim')?answer = `김서방은 ${seoul.indexOf('Kim')}에 있다` : "김서방은 없다"
    return answer;
}