// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// n / m / return
// 3 / 12 / [3, 12]
// 2 / 5 / [1, 10]

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
