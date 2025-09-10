function add(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum=sum+arguments[i];
        
    }
    return sum;
}
function addExample(...args){
    let sum=0;
    for(let i=0;i<args[0].length;i++){
        sum=sum+args[0][i];
        
    }
    return sum;
}
console.log(add(1,2,3,3,4,5));
let arr=[1,2,3,3,4,5];
console.log(addExample(arr));