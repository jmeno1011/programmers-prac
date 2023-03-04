function solution(s) {
    var answer = [];
    const temp = []
    const strArr = s.split("");
    answer = strArr.map(str => {
        if(!temp.includes(str)){
            temp.push(str);
            return -1;
        }else{
            const index = temp.lastIndexOf(str);
            const length = temp.length;
            temp.push(str);
            return length - index;
        }
    })
    return answer;
}