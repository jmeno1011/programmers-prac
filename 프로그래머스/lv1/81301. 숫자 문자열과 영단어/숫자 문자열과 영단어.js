function solution(s) {
    var answer = 0;
    const standard = ["zero", "one", "two", "three", "four", 
                      "five", "six", "seven", "eight", "nine"]
    for(let i = 0; i < standard.length; i++){
        s = s.split(standard[i]).join(i);
    }
    return answer = Number(s);
}