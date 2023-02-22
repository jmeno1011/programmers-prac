function solution(numbers) {
    var answer = 0;
    const standard = ["zero", "one", "two", "three", "four", 
                      "five", "six", "seven", "eight", "nine"]
    for(let i = 0; i < standard.length; i++){
        numbers = numbers.split(standard[i]).join(i);
    }
    return answer = Number(numbers);
}