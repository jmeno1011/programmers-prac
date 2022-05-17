function solution(absolutes, signs) {
    var answer = 123456789;
    var init = signs[0]?absolutes[0]:(absolutes[0]*-1)
    answer = absolutes.reduce((accumulator, curr, currentIndex) => {
        return accumulator + (signs[currentIndex]?curr:(curr*-1))},0)
    return answer;
}