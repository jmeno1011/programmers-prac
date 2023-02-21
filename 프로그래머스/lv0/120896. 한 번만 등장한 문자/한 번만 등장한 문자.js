function solution(s) {
    var answer = '';
    const temp = {};
    const strArr = s.split("");
    strArr.map(str => temp[str] ? temp[str]++ : temp[str] = 1);
    let arr = Object.keys(temp).map(key => ({str:key, num:temp[key]}));
    arr = arr.filter(el => el.num===1).map(v=>v.str).sort();
    return answer = arr.join("");
}