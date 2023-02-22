function solution(spell, dic) {
    var answer = 0;
    let count = 0;
    for(const word of dic){
        spell.filter(char => !word.includes(char)).length === 0 && count++;
    }
    return answer = count >= 1 ? 1 : 2;
}