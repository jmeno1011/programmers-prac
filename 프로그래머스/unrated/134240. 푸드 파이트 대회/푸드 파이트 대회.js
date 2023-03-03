function solution(food) {
    var answer = '';
    const arr = []
    let index = 0;
    for(let i=1; i<food.length; i++){
        index += parseInt(food[i] / 2);
    }
    const arrlen = index*2 +1;
    arr[index] = 0;
    let n = 1;
    for(let i=1; i<food.length; i++){
        for(let j = 0; j<parseInt(food[i] / 2); j++){
            arr[j+n-1] = i;
            arr[arrlen-1-(j+n-1)] = i;
        }
        n += parseInt(food[i] / 2);
    }
    return answer = arr.join("");
}