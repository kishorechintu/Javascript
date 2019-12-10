
var totalPerson=document.getElementById("txtPersons").value;
var persons = document.getElementById("txtPersons");

document.getElementById("txtPersons").addEventListener("keyup", function(){
        let totalPerson =  document.getElementById("txtPersons").value;
        if(totalPerson>1){

            document.getElementById('suite').innerHTML=4500;
            document.getElementById('delux').innerHTML=2500;
        
        }
        else{
            document.getElementById('suite').innerHTML=4000;
            document.getElementById('delux').innerHTML=2000;
        }
        if(totalPerson>3){
            alert("More Than 3 Persons are NOt allowed in One Room")
            document.getElementById("txtPersons").value= " ";
            document.getElementById('suite').innerHTML=4000;
            
            document.getElementById('delux').innerHTML=2000;
        }
        
    
});


function OrderClick(){
    var roomType;
var Ac=1000;
var lockerCost = 500;
var roomRent;
var facilities=[];

var pAdv=0;
var total;
var balance;

    
    
    

var fName=document.getElementById("txtFName").value;
var LName=document.getElementById("txtLName").value;
var fullName=fName+" "+LName;

document.getElementById("tblName").innerHTML=fullName;

var cDate=document.getElementById("txtDate").value;
document.getElementById("tblDate").innerHTML=cDate;

var totalDays=document.getElementById("txtDays").value;
document.getElementById("tblDays").innerHTML=totalDays;

var totalPerson=document.getElementById("txtPersons").value;
  
document.getElementById("tblPersons").innerHTML=totalPerson;

pAdv =  document.getElementById("txtAdvance").value;

if(document.getElementById('optDelux').checked)
{
    roomType = "Delux Room"
}else{
    roomType = "Suite Room"
}

if(document.getElementById('optLocker').checked)
{
   facilities.push('Locker')
}
if(document.getElementById('optAC').checked)
{
    facilities.push('AC')
}

  if(optDelux.checked) {

    if(totalPerson>1 && totalPerson<=3)
    {
        roomRent = 2500;
    }else{
    roomRent=2000;
    }
   }
   
   if(optSuite.checked) {
    if(totalPerson>1 && totalPerson<=3)
    {
        roomRent = 4500;
    }else{
    roomRent=4000;
    }
   }

   if(optLocker.checked) {
       roomRent=roomRent + 500
   }
   if(optAC.checked) {
      roomRent=roomRent + 1000
   }

   total=(roomRent*totalDays);
   balance=total-pAdv;
   if (LName == "")                                  
   { 
       window.alert("Please enter your name."); 
       document.getElementById('txtLName').focus();
       return false; 
   } else if (totalDays == "")                                  
   { 
       window.alert("Please enter No Of Days."); 
       document.getElementById('txtDays').focus(); 
       return false; 
   }else if (totalPerson == "")                                  
   { 
       window.alert("Please enter No of Persons."); 
       document.getElementById('txtPersons').focus(); 
       return false; 
   } else{

    document.getElementById("frmReg").style.display="none";
    document.getElementById("frmDetails").style.display="block";

    document.getElementById("tblAdv").innerHTML=pAdv;
document.getElementById("roomType").innerHTML=roomType;
document.getElementById("tbllockerAndac").innerHTML=facilities;
document.getElementById("totalAmount").innerHTML=total;
document.getElementById("totalBalance").innerHTML=balance;

clearForm()
   }

}


function CloseClick(){
document.getElementById("frmReg").style.display="block";
document.getElementById("frmDetails").style.display="none";
}
function clearForm(){
    document.getElementById("txtFName").value = ''
    document.getElementById("txtLName").value = ''
    document.getElementById("txtDays").value = ''
    document.getElementById("txtPersons").value = ''
    document.getElementById("txtAdvance").value = ''
    document.getElementById("txtDays").value = ''
    document.getElementById('optLocker').checked = false
    document.getElementById('optAC').checked = false
    document.getElementById('optDelux').checked = true


}
