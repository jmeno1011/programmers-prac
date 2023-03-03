function solution(t, p) {
    var answer = 0;
    const arr = []
    t = t.split("");
    for(let i = 0; i<t.length - p.length +1; i++){
            const item = [];
        for(let j = i; j<p.length+i; j++){
            item.push(t[j]);
        }
        arr.push(item.join(""))
    }
    return answer = arr.filter(item => Number(item) <= Number(p)).length;
}

