function solution(numbers, k) {
    var answer = 0;
    const long = 2 * k - 2;
    const index = numbers.length > long? long : long % numbers.length;
    console.log(index)
    return answer = numbers[index];
}