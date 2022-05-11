function solution(n, m) {
    var answer = [];
    var temp1 = gcd(n, m);
    var temp2 = lcm(temp1, n, m);
    answer.push(temp1)
    answer.push(temp2)
    return answer;
}

function gcd(num1, num2){
    while(num2>0){
        var temp = num1 % num2;
        num1 = num2;
        num2 = temp
    }
    return num1
}
function lcm(gcd_num,num1, num2){
    return gcd_num*(num1/gcd_num)*(num2/gcd_num);
}