const first=[1,2,3,4,5,6];
const second=[{id:1,name:'yamini'},{id:2,name:'sad'}];
// const third=first.concat(second);
const third=[...first,...second];
console.log(third);
// console.log(third.slice(5,7));