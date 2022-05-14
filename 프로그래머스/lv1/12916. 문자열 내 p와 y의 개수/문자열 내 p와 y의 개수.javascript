function solution(s){
    if(s.length<=50){
        var answer = true;
        var p=0;
        var y=0;
        s.toLowerCase().split("").filter(item=>{if(item==='p'){
            p++;
        }else if(item==='y'){
            y++;
        }});
        return p===y?answer:false;    
    }else{
        return false
    }
    
}