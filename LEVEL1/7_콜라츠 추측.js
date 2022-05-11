// 예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution을 완성해 주세요. 
// 단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

// n / result
// 6 / 8
// 16 / 4
// 626331 / -1

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
