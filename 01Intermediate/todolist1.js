const todolist=[]
todolist.unshift('Hi')
todolist.unshift('How')
todolist.unshift('Are')
todolist.unshift('You')

todolist.push('Hi')
todolist.push('How')
todolist.push('Are')
todolist.push('You')
console.log(todolist.length);
for(let i=0;i<todolist.length;i++)
{
    console.log("Todo List is--"+todolist[i]);
}