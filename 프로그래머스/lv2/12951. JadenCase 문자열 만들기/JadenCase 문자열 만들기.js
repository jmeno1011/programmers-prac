function solution(s) {
    var answer = '';
    const arr = s.split(" ").map(str=>JadenCase(str))
    return answer = arr.join(" ");
}

function JadenCase(str){
    const arr = str.split("").map((s, index)=>{
        if(index === 0){
          return s.toUpperCase();
        }else{
            return s.toLowerCase();
        }
    })
    return arr.join("");
}