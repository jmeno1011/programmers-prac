function solution(k, m, score) {
    var answer = 0;
    const sortArr = [...score].sort((a,b)=>{
        if(a === b){
            return 0;
        }else{
            return a > b ? -1 : 1;
        }
    })
    const temp = [];
    for(let i = 0; i<parseInt(sortArr.length/m); i++){
        if(sortArr.slice(i*m,i*m +m).length === m){
            temp.push(sortArr.slice(i*m,i*m +m));
        }
    }
    const minArr = temp.map(t => Math.min(...t)*m);
    
    return answer = minArr.reduce((prev, curr)=>prev+curr, 0);
}