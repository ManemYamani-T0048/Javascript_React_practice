function task1(){
    return new Promise((resolve,reject)=>{
        const task1=false;
            setTimeout(()=>{
                if(task1)
                resolve('TAsk1');
            else
            reject('didnt task1');
        },1000);
    })

};

function task2(){
    return new Promise((resolve,reject)=>{
        const task2=true;
            setTimeout(()=>{
                if(task2)
                resolve('TAsk2');
            else
            reject('didnt task2');
        },1500);
    })
};
task1().then(value=>{console.log(value); return task2();})
        .then(value=>{console.log(value); console.log("all completed");})
        .catch(err=>console.error(err));