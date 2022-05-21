function solution(n, lost, reserve) {
    var answer = 0;
    var newLost = lost.filter(i=>!reserve.includes(i))
    // console.log(newLost);
    var newReserve = reserve.filter(i=>!lost.includes(i));
    // console.log(newReserve)
    var temp = Array(n).fill().map((value,index)=>index+1);
    // console.log(temp)
    answer = temp.filter(i=>!newLost.includes(i)).length;
    // console.log(temp.filter(i=>!newLost.includes(i)))
    answer += newReserve.filter(i=>newLost.includes(i-1)||newLost.includes(i+1)).length;
    // console.log(newReserve.filter(i=>newLost.includes(i-1)||newLost.includes(i+1)))
    return answer>n?n:answer;
}