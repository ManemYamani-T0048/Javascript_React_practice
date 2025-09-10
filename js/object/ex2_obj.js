// function Address(street,city,zip){
//     this.street=street;
//     this.city=city;
//     this.zip=zip;
// }
// const obj1=new Address('tagore center','bathili','54367');
// console.log(obj1);
function address(street,city,zip)
{
    return {
    street,
    city,
    zip
    };
}
const obj2=address('0-00','sklm',768);
console.log(obj2);