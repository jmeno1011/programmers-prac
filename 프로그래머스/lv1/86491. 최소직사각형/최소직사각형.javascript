function solution(sizes) {
    var answer = 0;
    var big = [];
    var small =[];
    sizes.map(value=>{small.push(Math.min(...value)); big.push(Math.max(...value))});
    answer = Math.max(...small)*Math.max(...big)
    return answer;
}