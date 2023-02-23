function solution(array, n) {
    var answer = 0;
    let numArr = array.map(num => ({"number":num, "sub": Math.abs(num - n)}));
    numArr.sort((a,b)=>{
        if(a.sub === b.sub){
            return 0;
        }else{
            return a.sub > b.sub ? 1 : -1
        }
    })
    const minDiffer = numArr[0].sub;
    const count = numArr.filter(num => num.sub === minDiffer).length;
    if(count === 1 ){
        return numArr[0].number;
    }else if(count > 1 ){
        const temp = numArr.filter(num => num.sub === minDiffer);
        temp.sort((a,b)=>{
            if(a.number === b.number){
                return 0;
            }else{
                return a.number > b.number ? 1 : -1
            }
        });
        return temp[0].number;
    }
}