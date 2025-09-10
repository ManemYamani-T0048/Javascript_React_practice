const Circle={
    radius:1,
    greet:function(){
        let x=10;

    }
};
const Square={
    side:4
};
// const another={...Circle};
// console.log(another);
const another=Object.assign({color:'blue'},Circle,Square);
console.log(another);