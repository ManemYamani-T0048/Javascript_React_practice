function CreateCircle(radius){
    this.radius=radius;
    this.greet=function(){
        console.log("hi");
    }
}
const obj=new CreateCircle(3);
obj.greet();
