function task1(){
    return new Promise((resolve,reject)=>{
        const task1=true;
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
async function dotasks(){
    try{
        const a=await task1();
        console.log(a);
        const b=await task2();
        console.log(b);
    }
    catch(e){
        console.error(e);
    }
}
dotasks();