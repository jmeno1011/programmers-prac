function solution(array) {
    var answer = 0;
    const arr = {};
    array.map(value=> arr[value] ? arr[value]++ : arr[value] = 1);
    const objArr = Object.values(arr);
    console.log(arr)
    const max = Math.max(...objArr);
    return answer = objArr
        .filter(value => value === max).length > 1 
        ? -1 
    : Number(Object.keys(arr).find(key => arr[key] === max));
}