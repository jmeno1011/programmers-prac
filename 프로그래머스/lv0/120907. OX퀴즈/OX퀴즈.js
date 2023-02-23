function solution(quiz) {
    var answer = [];
    quiz.map(expre => answer.push(op(expre.split(" "))));
    return answer;
}

function op(arr){
    if(arr[1] === "-"){
        return Number(arr[0]) - Number(arr[2]) === Number(arr[4]) ? "O" : "X"
    }else if(arr[1] === "+"){
        return Number(arr[0]) + Number(arr[2]) === Number(arr[4]) ? "O" : "X"
    }
}