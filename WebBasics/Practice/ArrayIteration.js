let msg =[
    ['kishore','Developer',"Hyd"],
    ['chintu','IT',"Chennai"],
    ['kumar','swami']
]

let msgObj=[
[
    {name:'Kishore',course:'JS',Desig:'MEAN Stack Developer'},
    {name:'Mrunal',Desig:'IT'}
],
[
    {name:'chintu',Address:'Hyd'},
    {name:'kumar'}
],
[{name:'Madhu',Desig:'Developer'}]

]
// let len = msg.length;
// for(i=0;i<len;i++)
// {   console.log(i,"Length is --"+len)
//    for(j=0;j<msg[i].length;j++)
//    {    
//        console.log(msg[i][j])
//    } 
      
// }

// for(let element of msgObj)
// {
//     for(let key in element)
//     {
//         console.log("The values is --"+key +"  "+element[key])
//     }
// }
// for(i=0;i<msgObj.length;i++)
// {

//     for(let obj of msgObj[i])
//     {
//         for(let value in obj)
//         {
//             console.log(value +"  Is  "+obj[value])
//         }
//     }
// }
//////////////// ORRRRRRRR ///////////////
for(let arr of msgObj)
{
    for(let obj of arr)
    {
        for(let value in obj)
        {
            console.log(value +"  Is  "+obj[value])
        }
    }
}
