let myTodo1= {
        days:0,
        meetings:0,
        meetDone:0,
        meetLeft:0,
        addMeetings:function(num){
            this.meetings=this.meetings+num
        },
        meetingDone:function(num){
            this.meetDone=this.meetDone+num
        },
        reset:function()
        {
            this.meetings=0
            this.meetDone=0
        },
        summary:function()
        {
            this.meetLeft=this.meetings-this.meetDone
            return `You have ${this.meetLeft} Meetings left today`
        }
}

myTodo1.addMeetings(4)
myTodo1.addMeetings(2)
myTodo1.meetingDone(5)
console.log(myTodo1.summary())