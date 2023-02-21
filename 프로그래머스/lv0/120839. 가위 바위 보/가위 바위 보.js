function solution(rsp) {
    var answer = '';
    const strArr = rsp.split("");
    const rspStr = strArr.map(str=> rspFunc(str));
    return answer = rspStr.join("");
}

function rspFunc(str){
    if(str === "2"){
        return "0"
    }else if(str === "0"){
        return "5"
    }else{
        return "2"
    }
}