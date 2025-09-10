let prices=[
    {price:'$',tooltip:'inexpensive',minperperson:0,maxperperson:10},
    {price:'$$',tooltip:'moderate',minperperson:11,maxperperson:20},
    {price:'$$$',tooltip:'expensive',minperperson:21,maxperperson:40}
]
for(let i of prices){
    for(let j in i){
        console.log(i[j]);
    }
}