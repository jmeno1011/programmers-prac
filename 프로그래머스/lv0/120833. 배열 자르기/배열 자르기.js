function solution(numbers, num1, num2) {
    var answer = [];
    return answer = numbers.filter(
        (number, index)=> (index >= num1 && index <= num2 )
    );
}