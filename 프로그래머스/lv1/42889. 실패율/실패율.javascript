function solution(N, stages) {
    var answer = [];
    var result = []
    var people = stages.length;
    
    for(let i=1; i<=N; i++){
        var fail = stages.filter(item=>item===i).length / people
        result.push([i,fail])
        people -= stages.filter(item=>item===i).length
    }
    
    result.sort((a,b)=>b[1]-a[1]).map(value=>answer.push(value[0]));
    
    return answer;
}