function solution(chicken) {
    var answer = 0;
    let service = 0;
    let count = chicken;
    while(count >= 10){
        service += parseInt(count / 10);
        count = parseInt(count / 10) + count % 10;
    }
    
    return answer = service;
}