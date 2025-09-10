arr=[1,2,'',5,6,NaN,undefined,8,9];
count=0;
for (let i of arr){
    if(i)
        count++;
}
console.log(count);