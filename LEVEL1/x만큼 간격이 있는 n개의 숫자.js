// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
// 예시
// x / n / answer
// 2 / 5 / [2,4,6,8,10]
// 4 / 3 / [4,8,12]
// -4 / 2 / [-4,-8]

function solution(x, n) {
    var answer = [];
    for(let i=1; i<n+1; i++){
        answer.push(x*i)
    }
    return answer;
}
