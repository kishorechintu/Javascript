let mountains = [
    {Id : 1, name:"Kishore", Course :"Java Script",Desig :"Developer"},
    {Id :2, name:"chintu",course :"Ts",De:"MEAN Stack Developer"},
    {Id :3, name:"Kumar",course :"Python",Desig : "Angular Developer"},
    {Id :4, name:"Raj",course :"Python",Desig : "Angular Developer"},
    {Id :5, name:"Mahesh",course :"Python",Desig : "Angular Developer"},
    {Id :6, name:"Bharath",course :"Python",Desig : "Angular Developer"},
    {Id :7, name:"Jasmin",course :"Python",Desig : "Angular Developer"},
    {Id :8, name:"Ram",course :"Python",Desig : "Angular Developer"},
  ];

function generateTableHead(table,data){
    let thead = table.createTHead();
    let row = thead.insertRow();
    
    for(let key of data){
        let th = document.createElement("th")
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }

}

let table = document.querySelector("#t1");
let data = Object.keys(mountains[0]);
generateTableHead(table,data);
console.log(data)

function generateTable(table,data){
    for(let element of data){
        let row = table.insertRow();
        for(key in element){
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}
generateTable(table,mountains);