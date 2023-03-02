function solution(n, arr1, arr2) {
    var answer = [];
    arr1 = arr1.map(v=> convertToBinary(v));
    arr1 = arr1.map(str => addZero(str, n));
    arr1 = arr1.map(str=> convertShap(str));
    arr2 = arr2.map(v=> convertToBinary(v));
    arr2 = arr2.map(str => addZero(str, n));
    arr2 = arr2.map(str=> convertShap(str));
    for(let i = 0; i<arr1.length; i++){
        const arr1Arr = arr1[i].split("");
        const arr2Arr = arr2[i].split("");
        const result = arr1Arr.map((str,index)=>str===" "&&arr2Arr[index]===" "?" ":"#").join("");
        answer.push(result);
    }
    return answer;
}

function convertToBinary(n){
    let binary = (n % 2).toString();
    let num = n;
    while(num > 1){
        num = parseInt(num / 2);
        binary = (num % 2) + binary;
    }
    return binary;
}

function addZero(str, n){
    const len = n - str.length;
    for(let i=0; i<len; i++){
        str = "0"+str;
    }
    return str;
}

function convertShap(str){
    let strArr = str.split("");
    strArr = strArr.map(str => str==="0"?" ":"#");
    return strArr.join("");
}