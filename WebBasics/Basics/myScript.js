// const myElement=document.querySelectorAll('p');
// console.log(myElement[3])

// const myPElement=document.querySelector('p')
// myPElement.textContent="I am Being charnged using JS"
// console.log(myPElement)

// const myPElement=document.querySelectorAll('p')
// myPElement.forEach(function(p){
//    p.textContent="Im being changed"
// })

//Arro Function
// const myPElement=document.querySelectorAll('p')
// myPElement.forEach((p)=> p.textContent="Im being changed")

const newPara=document.createElement('p')
newPara.textContent="Im dynamically added using JS"
document.querySelector('body').appendChild(newPara)

const newH1=document.createElement('h1')
newH1.textContent="I'm Dynamic H1 Added Using JS"
document.querySelector('.classOne').appendChild(newH1)

document.querySelector('#myButton').addEventListener('click',(event)=>{
    event.target.textContent="New Content"
})
