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
        const task2=false;
            setTimeout(()=>{
                if(task2)
                resolve('TAsk2');
            else
            reject('didnt task2');
        },1500);
    })
};
Promise.any([task1(),task2()]).then(results=>console.log(results)).catch(err=>console.error(err));