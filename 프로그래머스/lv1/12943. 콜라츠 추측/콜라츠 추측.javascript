function solution(num) {
    var answer = 0;
    while(true){
        if(num%2===0){
            num = num/2;
            answer++;
        }else if(num===1){
            break;
        }
        else{
           num = num * 3 + 1;
            answer++;
        }    
    }    
    if(answer>500){
        return -1;
    }else{
        return answer;    
    }
}