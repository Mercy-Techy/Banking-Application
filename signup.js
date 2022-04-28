let inputs = document.querySelectorAll("input");
let confirmAllField = () => {
  let count = 0;
  inputs.forEach((input) => {
    if (input.value == "") {
      alert(
        "Please Fill The " +
          input.name[0].toUpperCase() +
          input.name.slice(1) +
          " Input Box"
      );
      count += 1;
    }
  });
  if (count == 0) {
    return true;
  } else {
    return false;
  }
};
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
let getEmail = () => {
  let email;
  inputs.forEach((input) => {
    if (input.name == "email") {
      email = input.value;
    }
  });
  return email;
};
let confirmUser = () => {
  let user = localStorage.getItem(getEmail());
  let users = localStorage.getItem(getFullName());
  if (user) {
    alert("User Already Exist");
  } else if (users) {
    alert("Username Already Exist");
  } else {
    localStorage.setItem(getEmail(), getEmail());
    localStorage.setItem(getFullName(), getPassword());
    window.location.replace("./index.html");
    let save = getFullName()
    localStorage.setItem("presentName",save)
  }
};
function final(event) {
  event.preventDefault()
  if (confirmAllField()) {
    let ten = document.getElementById("ten").value;
    let eight = document.getElementById("eight").value;
    if (ten.length >= 10) {
      if (eight.length >= 8) {
        confirmUser();
      } else {
        alert(
          "Please Fill A Minimum Of 8 Alphabets And/Or Numbers For Password"
        );
      }
    } else {
      alert("Please Fill A Minimum Of 10 Alphabets For Name");
    }
  }
}

let caller = document.getElementById("caller")
caller.addEventListener("click",final)
