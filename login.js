let inputs = document.querySelectorAll("input")
let getFullName = () => {
  let fullname;
  inputs.forEach((input) => {
    if (input.name == "name") {
      fullname = input.value;
    }
  });
  return fullname;
};
let getPassword = () => {
  let password;
  inputs.forEach((input) => {
    if (input.name == "password") {
      password = input.value;
    }
  });
  return password;
};
function login() {
  let check = localStorage.getItem(getFullName());
  let pass = document.getElementById("pass").value
      if(check){
           if(pass == check){
               alert("Welcome");
               window.location.replace("./index.html");
               let save = document.getElementById("save").value
               localStorage.setItem("presentName",save);
           }
           else{
               alert("Incorrect Password")
           }
      }
      else{
          alert("Username Does Not Exist")
      }
}
function int() {
  let inouts = document.querySelectorAll("input");
  let count = 0;
  inputs.forEach((input) => {
    if (input.value == "") {
      alert("Please the " + input.name + " box");
      count += 1;
    }
  });
  if (count <= 0) {
    return true;
  } else {
    return false;
  }
}
function now(event) {
    event.preventDefault()
  if (int()) {
    login();
  }
}
let caller = document.getElementById("caller")
caller.addEventListener("click",now)