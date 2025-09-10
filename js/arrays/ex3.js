const arr1=[1,2,3,4,5,6];
const arr2=[3,4];
const arr3=[];
for(let i of arr1){
    if(!arr2.includes(i))
        arr3.push(i);
}
console.log(arr3);