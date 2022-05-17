function solution(numbers) {
    var answer = -1;
    var number = [1,2,3,4,5,6,7,8,9,0];
    answer = number.filter(item=>!numbers.includes(item)).reduce((accumulator, curr) => accumulator + curr)
    return answer;
}