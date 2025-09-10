function prime(num){
    for(let i=2;i<=num;i++)
    { let flag=1;
        for(let j=2;j<Math.floor(i/2)+1;j++)
        {
            if(i%j===0){
                flag=0;
                break;
            }
        }
        if(flag)
            console.log(i);


    }
}

prime(10);