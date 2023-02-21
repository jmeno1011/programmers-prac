function solution(before, after) {
    var answer = 0;
    const beforeArr = before.split("").sort().join("");
    const afterArr = after.split("").sort().join("");
    return answer = beforeArr === afterArr ? 1 : 0;
}