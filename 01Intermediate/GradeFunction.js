let Grade=function(M,CS,SCI){
    if((M&&CS&&SCI)!='')
    {
    maths=M;
    cs=CS;
    science=SCI;
    let percentage=((M+CS+SCI)/300)*100;
    return percentage;
    }
    else{
        console.log("Enter valid numbers");
    }
}
let result=Grade("44","70","70");
if(result>=90){
    console.log("Percentage is-- "+result+" A Grade");
}else if(result>=80){
    console.log("Percentage is-- "+result+" B grade");
}else if(result>=70){
    console.log("Percentage is-- "+result+" C Grade");
}else if(result>=50){
    console.log("Percentage is-- "+result+" D Grade")
}else{
    console.log("Percentage is-- "+result+" Failed");
}