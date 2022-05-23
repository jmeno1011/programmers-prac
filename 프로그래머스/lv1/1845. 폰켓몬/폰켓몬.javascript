function solution(nums) {
    var answer = 0;
    var len = nums.length/2;
    var pokemon = [];
    for(let i=0; i<nums.length; i++){
        if(len>0){
            if(i===0){
                pokemon.push(nums[i]);
                len--;
            }else{
                if(!pokemon.includes(nums[i])){
                    pokemon.push(nums[i]);
                    len--;
                }
            }
        }else{
            break;
        }
    }
    answer = pokemon.length;
    return answer;
}