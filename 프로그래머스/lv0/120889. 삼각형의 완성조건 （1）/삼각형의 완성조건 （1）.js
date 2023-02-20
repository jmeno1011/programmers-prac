function solution(sides) {
    var answer = 0;
    const max = Math.max(...sides);
    const otherSides = sides.filter(number=>number !== max);
    const anothers = otherSides[0] + otherSides[1];
    return answer = max >= anothers ? 2 : 1;
}