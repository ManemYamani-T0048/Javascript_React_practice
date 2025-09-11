var name='yamini';
let age=20;
function greet(){
    console.log(name);
    age=18;
}
if(true){
    var clas=10;
}
greet();
console.log(age); //-- throws an error cause age is defined inside function
console.log(clas);
