var ul=document.getElementById('list');
var li;

var addButton = document.getElementById('add')
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem);




function addItem(){
    var input=document.getElementById('input')
    var item=input.value;
    //ul=document.getElementById('list');
    var textnode = document.createTextNode(item);
    if(item === ''){
        alert('Todo Should not be empty');
        return false;
        //Assignment Add a P tag and Assign a value of "Enter To Do"
    }
    else{
        //create li
        li = document.createElement('li')
        
        //create Checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id','check')

        //create label
        var label = document.createElement('label')
        label.setAttribute('for','item') // optional for reference

        //add these elements to documents
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
        
        input.value='';

        //Animation Effect
        setTimeout(()=>{li.className = 'visual';},200)

    }

}

function removeItem(){
    li=ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
       
        
        
    }
    
    
}