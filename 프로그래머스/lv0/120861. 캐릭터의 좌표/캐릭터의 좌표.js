function solution(keyinput, board) {
    var answer = [];
    const horiz = (board[0]-1)/2;
    const verti = (board[1]-1)/2;
    let dots = [0,0];
    keyinput.map(direct => {
        if(direct === "right"){
            dots[0] = Math.abs(dots[0] + 1) > horiz 
                ?(dots[0] > 0 ? horiz : -1 * horiz) : dots[0] + 1; 
        }else if(direct === "left"){
            dots[0] = Math.abs(dots[0] - 1) > horiz 
                ?(dots[0] > 0 ? horiz : -1 * horiz) : dots[0] - 1; 
        }else if(direct === "up"){
            dots[1] = Math.abs(dots[1] + 1) > verti 
                ?(dots[1] > 0 ? verti : -1 * verti) : dots[1] + 1; 
        }else if(direct === "down"){
            dots[1] = Math.abs(dots[1] - 1) > verti 
                ?(dots[1] > 0 ? verti : -1 * verti) : dots[1] - 1;
        }
    })
    
    return answer = dots;
}