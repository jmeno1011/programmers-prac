function solution(dots) {
    var answer = 0;
    dots.sort((a,b)=>{
        if(a[0] === b[0]){
            return 0;
        }else{
            return a[0] > b[0] ? 1 : -1;
        }
    })
    return answer = (dots[1][1] - dots[0][1])/(dots[1][0] - dots[0][0]) === (dots[3][1] - dots[2][1])/(dots[3][0] - dots[2][0]) ? 1 : 0;
}