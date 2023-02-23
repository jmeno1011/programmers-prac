function solution(score) {
    var answer = [];
    const temp = score.map(value => (value[0]+value[1])/2);
    let sort_ = [...temp].sort((a,b)=>{
        if(a===b){
            return 0;
        }else{
            return a > b ? 1 : -1;
        }
    })
    sort_ = sort_.reverse()
    return answer = temp.map(value => sort_.findIndex(v=> v===value)+1 ) ;
}