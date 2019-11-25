function validate(){
    var digit=/[0-9]/;
    var caps=/[A-Z]/;
    var small=/[a-z]/;
    var specail=/(@|#|$)/;

    var Fname=document.getElementById("Fname").value;
    var Lname=document.getElementById("Lname").value;
    var password=document.getElementById("pass").value;
    var cpas=document.getElementById("cpass").value;

    if(digit.test(Fname))
    {
        document.getElementById("Lname").value="FirstName could not contain digits"
       //alert("FirstName could not contain digits");    
    }
    else if(!(caps.test(Fname)))
    {
        alert("FirstName should contain atleast one capital letter");
    }
    else if(!(small.test(Fname)))
    {
        alert("FirstName should contain atleast one small letter");
    }
    
    if(!digit.test(Lname.substring(0,1))){
        alert("Last Name should start with numeric value")
    }else if(!caps.test(Lname.substring(Lname.length-1,Lname.length))){
        alert("Last Name should end with alphabet value")
    }

}

//testing
function FNAME(){
    var digit=/[0-9]/;
    if(digit.test(Fname))
    {
        document.getElementById("in").innerHTML="FirstName could not contain digits"
       //alert("FirstName could not contain digits");    
    }
}