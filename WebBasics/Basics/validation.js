//alert("Im linked")
function myValidation(){
    const myval=document.getElementById('text1').value;
    if(isNaN(myval) || myval<1 || myval>20)
    {
        console.log("Not a valid input")
    }
    else
    {
        console.log("input is ok")
    }
}

document.querySelector('.myForm').addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log(event.target.username.value)
    console.log(event.target.realname.value)
    event.target.username.value=''
    event.target.realname.value=''
    
})
