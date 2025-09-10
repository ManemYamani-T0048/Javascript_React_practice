const Adress={
    street:'Small street',
    city:'Bathili',
    Zipcode:532456
};
function showaddress(Adress){
    for (let i in Adress){
        console.log(i+":"+Adress[i]);
    }
}
showaddress(Adress);