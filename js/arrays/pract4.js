const arr=[1,2,3,4,-1];
// const allnumbers=arr.every(function(i){ return i>=0});
// console.log(allnumbers);
const allnumbers=arr.some(function(i){ return i>=0});
console.log(allnumbers);