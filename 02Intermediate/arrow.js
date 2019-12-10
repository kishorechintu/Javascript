// let print=function(name){
//     return "Hello ="+name
// }
// console.log(print("Kishre"))

// let print = (name)=> `Hello ${name}`
// console.log(print("Kishore"))

let todo=[
    {
        title:" Buy Bread",
        isDone:true
    },
    {
        title:"Go to Gym",
        isDone:false
    },
    {
        title:"Assignment",
        isDone:true
    },
    {
        title:"Wake up early",
        isDone:false
    },
    {
        title:"Stop playing Pubg",
        isDone:false
    },
    {
        title:"completed javascript",
        isDone:true
    }

]
console.log(todo[0].title)

const thingsDone=todo.filter((param)=> param.isDone==true)


for(let i=0;i<thingsDone.length;i++)
{
    console.log(thingsDone[i].title)
}