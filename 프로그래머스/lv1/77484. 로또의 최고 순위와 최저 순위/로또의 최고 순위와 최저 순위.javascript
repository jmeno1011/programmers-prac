function solution(lottos, win_nums) {
    var answer = [];
    var zero = 0;
    for(var element of lottos){
        if(element===0){
            zero++
        }
    }
    var min = 0
    lottos.filter(item=>item!==0).map(value=>win_nums.includes(value)?min++:"")
    var max = min+zero;
    
    answer = [rankSwitch(max), rankSwitch(min)];
    return answer;
}

function rankSwitch(n){
    var rank = 0;
    switch(n){
        case 2:
            rank=5;
            break;
        case 3:
            rank=4;
            break;
        case 4:
            rank=3;
            break;
        case 5:
            rank=2;
            break;
        case 6:
            rank=1;
            break;
        default:
            rank=6;
    }
    return rank;
}