function solution(s, n) {
    var answer = '';
    answer = s.split("").map(
        value=>{
            if(value.match(/[a-z]/gi)){
                var code = value.charCodeAt();
            var shift = code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97: 0;
            return String.fromCharCode((code - shift + n)%26+shift);
            }
            return value ;
        }
    ).join('');
    return answer;
}