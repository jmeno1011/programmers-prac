function solution(id_pw, db) {
    var answer = '';
    if(db.filter(user=> user[0] === id_pw[0]).length === 0){
       return "fail"; 
    }else if(db.filter(user=> user[0] === id_pw[0] && user[1] !== id_pw[1]).length !== 0){
        return "wrong pw"
    }else if(db.filter(user=> user[0] === id_pw[0] && user[1] === id_pw[1]).length !== 0) {
        return "login"
    }
}