process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    rectangleStar(a,b)
});

function rectangleStar(n,m){
    let result = ""
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            result +="*"
        }
        result +="\n"
    }
    console.log(result)
}