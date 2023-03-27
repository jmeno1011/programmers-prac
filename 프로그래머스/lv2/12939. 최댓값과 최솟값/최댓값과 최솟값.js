function solution(s) {
    var answer = '';
    const arr = s.split(" ").sort((a,b)=>{
        if(Number(a) === Number(b)){
            return 0;
        }else{
            return Number(a) > Number(b) ? 1 : -1;
        }
    })
    return answer = arr[0]+" "+arr[arr.length-1];
}