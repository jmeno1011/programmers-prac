function solution(s) {
    var answer = true;
    var len = s.length;
    if(len>=1 && len<=8){
        if(s.length===4 || s.length===6){
            return len===s.match(/[0-9/]/g).join("").length?answer:false; 
        }else{
            return false;
        }
    }else{
        return false;
    }
    
    
}