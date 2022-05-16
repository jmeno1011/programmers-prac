function solution(a, b) {
    var answer = '';
    var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var day = new Date(`${a} ${b}, 2016`).getDay();
    answer = week[day];
    return answer;
}