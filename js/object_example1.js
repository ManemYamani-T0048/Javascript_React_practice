const Circle={
    radius:1,
    draw:function(){ // function as a value
        console.log("draw");
    },
    locations:{
        x:1, //this is the object--> object as a value
        y:2
    }

};
console.log(Circle.locations.y);