function solution(s) {
    var answer = 0;
    const arr = s.split(" ");
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 'Z'){
            answer -= arr[i-1];
        }else{
            answer += Number(arr[i]);
        }
    }
    return answer;
}