function solution(i, j, k) {
    var answer = 0;
    let str = "";
    for(let x = i; x <= j; x++){
        str += String(x);
    }
    const index = str.split("").filter(num => Number(num) === k).length;
    return answer = index;
}