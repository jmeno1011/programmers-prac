function solution(numbers) {
    var answer = 0;
    const maxA = max(numbers);
    const tempArr = numbers.filter(number => number !== maxA);
    const maxB = tempArr.length !== 0 ? max(tempArr) : maxA;
    return answer = maxA * maxB;
}

function max(arr){
    let temp = arr[arr.length];
    for(let i = 0; i < arr.length; i++){
        temp = temp >= arr[i] ? temp : arr[i];
    }
    return temp;
}