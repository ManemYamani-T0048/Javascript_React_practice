class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(`my name is "${this.name}" and i am ${this.age} year old.`)
    }
}
class developer extends Person{
    constructor(name,age,language){
        super(name,age);
        this.language=language;
    }
    display(){
        console.log(`myself ${this.name} i am a ${this.language} developer`);
    }
}
const employee1=new developer('abhishek',25,'php');
employee1.display();