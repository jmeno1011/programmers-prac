function solution(numbers) {
    var answer = 0;
    const numberList = numbers.sort((a,b)=>{
        if(a === b){
            return 0;
        }else{
            return a > b ? 1 : -1
        }
    })
    
    if(numbers.length === 2){
        return answer = numbers[0] * numbers[1];
    }else if(numberList.filter(num => num < 0).length >= 2){
        return answer = numberList[0] * numberList[1] > numberList[numberList.length -1] * numberList[numberList.length - 2] ? numberList[0] * numberList[1] :numberList[numberList.length -1] * numberList[numberList.length - 2]
    }else{
        return answer = numberList[numberList.length -1] * numberList[numberList.length - 2]
}
    
}
