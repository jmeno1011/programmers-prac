function solution(answers) {
    var answer = [];
    var first = [1,2,3,4,5];
    var second = [2,1,2,3,2,4,2,5];
    var third = [3,3,1,1,2,2,4,4,5,5];
    var firstScore, secondScore, thirdScore = 0;
    var score = [];
    var scoreBox = [];
    firstScore = answers.filter((item, index)=>item===first[(index+1)%5===0?4:(index+1)%5-1]).length;
    secondScore = answers.filter((item, index)=>item===second[(index+1)%8===0?7:(index+1)%8-1]).length;
    thirdScore = answers.filter((item, index)=>item===third[(index+1)%10===0?9:(index+1)%10-1]).length;
    score = [firstScore, secondScore, thirdScore];
    scoreBox = [[1,firstScore], [2,secondScore], [3,thirdScore]];
    var max = Math.max(...score);
    if(score.filter(item=>item===max).length===1){
        answer = scoreBox.filter(item=>item[1]===max)[0].slice(0,1)
    }else{
        scoreBox.filter(item=>item[1]===max).map(item=>answer.push(item[0]))
    }
    
    return answer;
}