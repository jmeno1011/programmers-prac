function solution(box, n) {
    var answer = 0;
    const volume = box.map(num => parseInt(num/n));
    answer = volume.reduce((prev, curr)=> prev * curr, 1)
    return answer;
}