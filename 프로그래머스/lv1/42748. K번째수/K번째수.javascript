function solution(array, commands) {
    var answer = [];
    commands.map(value=>answer.push(array.slice(value[0]-1,value[1]).sort((a,b)=>a-b)[value[2]-1]))
    return answer;
}