// let x=10;
// let y=x; //independent to each other
// x=20;
// console.log("x:"+x);
// console.log("y:"+y);

//value of reference
const x={
    value:10
};
const y=x;
x.value=20; // share the common address 
console.log(y.value);