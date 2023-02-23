function solution(A, B) {
    var answer = 0;
    if(A === B){
        return 0;
    }else{
        let count = 0;
        let a_ = A.split("");
        while(count < A.length){
            a_ = [a_.pop(), ...a_];
                count++;
            
            if(a_.join("") === B ){
                break;
            }
        }
        return count === A.length ? -1 : count;
    }
}