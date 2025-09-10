function Circle(r){
    this.r=r;
}
// const obj=new Circle(1);
const obj={}
Circle.call(obj,1)
console.log(obj.r);