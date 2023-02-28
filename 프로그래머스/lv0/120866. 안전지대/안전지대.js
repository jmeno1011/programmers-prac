function solution(board) {
    var answer = 0;
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(board[i][j] === 1){
                if(i !== 0 && board[i-1][j] !== 1){ 
                    board[i-1][j] = 2; // 위쪽
                }
                if(i !== board.length - 1 && board[i+1][j] !== 1){ 
                    board[i+1][j] = 2; // 아래쪽
                }
                if(j !== 0 && board[i][j-1] !== 1){ 
                    board[i][j-1] = 2; // 왼쪽
                }
                if(j !== board[i].length -1 && board[i][j+1] !== 1 ){ 
                    board[i][j+1] = 2; // 오른쪽
                }
                if(i !== 0 && j !== 0 && board[i-1][j-1] !== 1){ 
                    board[i-1][j-1] = 2; // 왼쪽 위 대각선
                }
                if(i !== 0 && j !== board[i].length -1 && board[i-1][j+1] !== 1){
                    board[i-1][j+1] = 2; // 오른쪽 위 대각
                } 
                if(i !== board.length -1 && j !== 0 && board[i+1][j-1] !== 1 ){
                    board[i+1][j-1] = 2; // 왼쪽 아래 대각
                }
                if(i !== board.length -1 && j !== board[i].length -1 && board[i+1][j+1] !== 1){
                    board[i+1][j+1] = 2; // 오른쪽 아래 대각
                }
            }
        }
    }
    for(const arr of board){
        for(const n of arr){
            if(n===0){
                answer++;
            }
        }
    }
    return answer;
}