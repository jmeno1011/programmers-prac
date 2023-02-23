function solution(numlist, n) {
    var answer = [];
    let numArr = numlist.map(num => ({"number":num, "sub": Math.abs(num - n)}));
    const sort_ = [...numArr].sort((a,b)=>{
        if(a.sub === b.sub){
            return a.number > b.number ? -1 : 1
        }else{
            return a.sub > b.sub ? 1 : -1
        }
    })
    return answer = sort_.map(number=> number.number);
}