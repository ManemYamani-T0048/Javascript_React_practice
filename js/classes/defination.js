class Person{
    language='telugu';
    #weight=48;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    static color='white';
    getweight(){
        return this.#weight;
    }
    *score(){
        yield 10;
        yield 20;

    }
    display(){
        console.log(`my name is "${this.name}" and i am ${this.age} year old.`)
    }
    static beautiful(){
        return (Person.color==='white'?'yes':'No');
    }
}
const obj1=new Person('yamini',21);
obj1.display();
console.log(Person.beautiful());
console.log(Person.color);
console.log(obj1.language);
console.log(obj1.getweight());
console.log([...obj1.score()]);//genrator function