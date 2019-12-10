let myTodo={
    day:0,
    meetings:0,
    meetDone:0
}
addMeeting=function(todo,meet=0)
{
    todo.meetings=todo.meetings+meet
}
meetDone=function(todo,meet=0)
{
    todo.meetDone=todo.meetDone+meet
}
resetDay=function(todo)
{
    todo.meetings=0
    todo.meetDone=0
}
getSummaryDay=function(todo)
{
    let meetLeft=todo.meetings-todo.meetDone
    return `You have ${meetLeft} Meetings Left`
}   

addMeeting(myTodo,4)
addMeeting(myTodo,2)

meetDone(myTodo,5)
console.log(getSummaryDay(myTodo));