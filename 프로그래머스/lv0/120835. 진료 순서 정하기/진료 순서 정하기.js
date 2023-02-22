function solution(emergency) {
    var answer = [];
    let sortArr = [...emergency].sort((a, b)=>{
        if(a === b){
            return 0;
        }else{
            return a > b ? -1 : 1;
        }
    });
    for(const num of emergency){
        answer.push(sortArr.findIndex(n=>n===num)+1);
    }
    return answer;
}