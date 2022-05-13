function solution(n) {
    const prime = new Array(n).fill(true)
    prime[0] = false;
    for(let i=2; i**2<=n; i++){
        if(prime[i-1]===true){
            for(let j=i**2; j<=n; j+=i){
                prime[j-1]=false;
            }
        }
    }
    return prime.filter(item=>item).length;
}