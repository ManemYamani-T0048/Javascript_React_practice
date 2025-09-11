function task1(callback){
    setTimeout(()=>{
        console.log('task1');
        callback();
    },1000);
    
}
function task2(callback){
     setTimeout(()=>{
        console.log('task2');
        callback();},1500);
    
}
task2(()=>{
    task1(()=>{
        console.log('all are completed');
    });
});
