function task1(){
    setTimeout(()=>console.log('TAsk1'),3000);}
function task2(){
    setTimeout(() => {
        console.log('task2');
    },2000);
}
task1();
task2();