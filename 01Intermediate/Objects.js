let course={
    author:"Kishore",
    courseName:"JavaScript",
    description:"Nothing"
}

// console.log(`Course Name is --${course.courseName} and Author is ${course.author}`)

let courseName=function(myObj){
    return {
        formatOne:`The Name of the course is ${course.courseName}`,
        formatTwo:`The Name of the author is ${course.author}`
    }
}

let newObj=courseName(course);
console.log(newObj.formatTwo);
