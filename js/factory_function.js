function circle(radius){
    return {
    radius,
    draw(){
        console.log("draw");
    }
    };
}
const obj1=circle(2);
obj1.draw();
console.log(obj1.constructor);