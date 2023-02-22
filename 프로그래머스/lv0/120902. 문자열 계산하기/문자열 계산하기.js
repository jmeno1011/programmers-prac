function solution(my_string) {
    var answer = 0;
    let arr = my_string.split(" ");
    for(let i=0; i<arr.length; i++){
        if(arr[i]==="+"){
            arr[i+1] = Number(arr[i+1]) * 1;
        }else if(arr[i] === "-"){
            arr[i+1] = Number(arr[i+1]) * -1;
        }else{
            answer += Number(arr[i]);    
        }
    }
    return answer;
}