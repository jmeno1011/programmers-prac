function solution(array) {
    var answer = 0;
    array.sort((a,b)=>{
        if(a === b){
            return 0;
        }else{
            return a > b ? 1 : -1
        }
    })
    return answer = array[parseInt(array.length / 2)];
}