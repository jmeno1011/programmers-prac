function solution(common) {
    var answer = 0;
    let state = "";
    if(common[1]/common[0] === common[2]/common[1]){
        state = "등비";
    }else{
        state = "등차";
    }
    if(state === "등차"){
        const temp = common[1] - common[0];
        answer = common[common.length-1] + temp;
    }else if(state === "등비"){
        const temp = common[1] / common[0];
        answer = common[common.length -1] * temp;
    }
    return answer;
}