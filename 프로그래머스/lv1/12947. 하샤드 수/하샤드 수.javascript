function solution(x) {
    var answer = true;
    var y = 0;
    for(let i=0; i<x.toString().length; i++){
        y += Number(x.toString().slice(i,i+1))
    }
    if(x%y===0){
        answer=true;
    }else{
        answer=false;
    }
    return answer;
}