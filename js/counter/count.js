let count=0;
let show=document.getElementById('show-count');
const incr=document.getElementById('increment');
const reset=document.getElementById('reset');
const dec=document.getElementById('decrement');
incr.onclick=function(){
    count=count+1;
    show.textContent=count;
}
dec.onclick=function(){
    count=count-1;
    show.textContent=count;
}
reset.onclick=function(){
    count=0;
    show.textContent=count;
}