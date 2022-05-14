function solution(s) {
    if(s.length>1){
        var answer = '';
        answer = s.split("").sort().reverse().join("")
        return answer;    
    }else{
        return false
    }
    
}