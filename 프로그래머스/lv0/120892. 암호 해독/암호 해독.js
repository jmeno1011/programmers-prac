function solution(cipher, code) {
    var answer = '';
    const strArr = cipher.split("").filter(
        (str, index)=> (index+1)%code===0 && str
    ).join("");
    return answer = strArr;
}