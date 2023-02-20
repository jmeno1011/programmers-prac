function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    const lcm = (denom1 * denom2) / gcd(denom1, denom2);
    const numerSum = (numer1 * (lcm / denom1)) + (numer2 * (lcm / denom2));
    const resultGcd = gcd(lcm, numerSum);
    const denom = lcm % resultGcd === 0 ? lcm / resultGcd : lcm;
    const numer = numerSum % resultGcd === 0 ? numerSum / resultGcd : numerSum;
    return answer = [numer, denom];
}

function gcd(a, b){
    while( b > 0 ){
        let temp = a;
        a = b;
        b = temp % b;
    }
    return a
}