function solution(my_string) {
    var answer = [];
    const rex = /[^0-9]/g;
    const numArr = my_string.replace(rex, "").split("").map(str=>Number(str));
    answer = numArr.sort((a,b)=>{
        if(a === b){
            return 0;
        }else{
            return a > b ? 1 : -1
        }
    })
    return answer;
}