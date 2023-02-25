function solution(lines) {
    var answer = 0;
    let m = 0;
    let n = 0;
    for(const line of lines){
        m += line[1] - line[0];
    }
    console.log(m);
    const temp = [...lines].flat().sort((a,b)=>{
        if(a===b){
            return 0;
        }else{
            return a > b ? 1 : -1;
        }
    })
    for(let i = 0; i<temp.length; i++){
        if(i % 2 ===0){
            n += temp[i];
        }else{
            n -= temp[i];
        }
    }
    
    return answer = (m - Math.abs(n))/2;
}