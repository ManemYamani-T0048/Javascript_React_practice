limit=10
function calculate(limit){
    count=0;
    for(let i=0;i<=limit;i++){
        if ((i%5===0) || (i%3===0))
            count=count+i;
        
    }
    return count;
}
console.log(calculate(limit));