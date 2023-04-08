function solution(s)
{
    var answer = -1;
    const strArr = s.split('');
    const arr = [];
    let even = "";
    for(let i=0; i<strArr.length; i++){
        arr.push(strArr[i])
        if(arr[arr.length-2]===strArr[i]){
            arr.pop();
            arr.pop();
        }
    }
    return answer = arr.length === 0?1:0;
}