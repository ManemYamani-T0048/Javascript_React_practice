const Car={
color:"red",
Name:'BMW'
}
const car1=Object.create(Car);
car1.drive=function(){
    console.log("i can drive");
}
// car1.drive();
console.log(car1.color);
console.log(car1.__proto__);
console.log(Object.getPrototypeOf(car1));
car1.__proto__.size="bug";
console.log(Car.size);