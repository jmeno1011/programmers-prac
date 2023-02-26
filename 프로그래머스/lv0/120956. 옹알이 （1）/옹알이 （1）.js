function solution(babbling) {
    var answer = 0;
    const arr = ["aya","ye","woo","ma"];
    for(let bab of babbling){
        for(const a of arr){
            if(bab.includes(a)){
                bab = bab.replace(a,"&");
            }
        }
        bab = bab.replaceAll("&","");
        if(bab === ""){
            answer++;
        }
    }
    return answer;
}