function solution(a, b) {
    var answer = 0;
    let gcdNum = b / gcd(a,b);
    while(gcdNum % 2 === 0 ){
        gcdNum = gcdNum/2;
    };
    while(gcdNum % 5 === 0){
        gcdNum = gcdNum/5;
    }
    return gcdNum === 1 ? 1 : 2;
}

function gcd(a, b){
	if(b === 0){
		return a;
	}else{
		return gcd(b, a % b);
	}
}