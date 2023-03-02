function solution(number) {
    var answer = 0;
    let results = combine(number, 3);
    results = results.map(result => (
        result.reduce((prev, curr)=>prev+curr, 0)
    ))
    return answer = results.filter(result => result ===0).length;
}

function combine(arr, select) {
  let answer = [];
  if (select === 1) {
    return arr.map((value) => [value]);
  }
  arr.forEach((element, index, origin) => {
    const _slice = origin.slice(index + 1);
    const items = combine(_slice, select - 1);
    const _append = items.map((item) => [element, ...item]);
    answer.push(..._append);
  });
  return answer;
}