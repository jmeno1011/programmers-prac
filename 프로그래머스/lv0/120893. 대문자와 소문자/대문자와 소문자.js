function solution(my_string) {
    var answer = '';
    const rex = /[A-Z]/g;
    let strArr = my_string.split("");
    strArr = strArr.map(str => 
                        str.match(rex) ? str.toLowerCase() : str.toUpperCase()
                       );
    return answer = strArr.join("");
}