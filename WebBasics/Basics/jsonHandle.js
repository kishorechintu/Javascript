const student = {
    name : 'john',
    age : 23,
    isActive :true
}

//convert this student object into a  string to be stored in local storage

// console.log("Type of Before converting student "+ typeof(student));

const studentObjToString = JSON.stringify(student);
// console.log("Type of Converted JSON" + typeof(studentObjToString));
localStorage.setItem('student',studentObjToString)

const toJSON =  JSON.parse(localStorage.getItem('student'))
console.log(toJSON);
