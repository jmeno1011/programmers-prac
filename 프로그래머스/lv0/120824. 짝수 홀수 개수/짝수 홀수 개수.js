function solution(num_list) {
    var answer = [];
    let even = 0;
    let odd = 0;
    for(const number of num_list){
        number % 2 === 0 ? even += 1 : odd += 1;
    }
    return answer = [even, odd];
}