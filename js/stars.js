function stars(r){
    for(let i=0;i<=r;i++){
        p='';
        for(let j=0;j<i;j++){
            p+='*';
        }
        console.log(p);
    }
}
stars(2);