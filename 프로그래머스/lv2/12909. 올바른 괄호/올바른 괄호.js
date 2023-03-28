function solution(s){
    var answer = true;
    let stack = 0;
    for(const str of s){
        if(str === "("){
            stack++;
            continue;
        }
        if(!stack){
            return false;
        }
        stack--;    
    }
    return stack === 0 ;
}