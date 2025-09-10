function includes(arr,seach){
// for(let i of arr){
//     if(seach===i){
//         return true;
//     }
    
// }
if(seach in arr) return true;
else return false;
}
const arr=[1,2,3,4];
console.log(includes(arr,3));