var login_field = document.getElementById("first");
var pass_field = document.getElementById("second");
var button = document.getElementById("third");

button.addEventListener("click", function(){
  console.log(login_field.value);
  console.log(pass_field.value);})
