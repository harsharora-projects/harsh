function validate(){
var email = document.getElementById("email").value;
var password = document.getElementById("psw").value;
if ( email == "admin" && password == "admin"){
alert ("Login successfully");
  }
  else{
    alert("Invalid username or password");
    }
  return false;
  }