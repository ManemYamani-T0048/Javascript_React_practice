const person={
    title:'a',
    releaseyear:2018,
    rating:4.5,
    director:'b'
};
function showProperties(person)
{
    for (let i in person)

    console.log('title'+i[title]+'director'+i[director]);
}
showProperties(person);