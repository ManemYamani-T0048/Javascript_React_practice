function Address(street,city,zip){
    this.street=street;
    this.city=city;
    this.zip=zip;
}
const obj1=new Address('tagore center','bathili','54367');
const obj2=new Address('tagore center','bathili','54367');
function areEqual(obj1,obj2){
    for (let i in obj1){
        if(obj1[i]!==obj2[i])
            return "not eqaul"
    }
    return "equal";
}
function areSame(obj1,obj2){
 if(obj1===obj2){
    return "they are equal in reference";
 }
 else{
    return "their addresses are not equal";
 }
}
console.log(areEqual(obj1,obj2));
console.log(areSame(obj1,obj2));