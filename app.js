const username = document.querySelector("#username");
const pass = document.querySelector("#pass");
const login = document.querySelector("#login");
const showPass = document.querySelector("#showPass");

const user = {
  uname: "admin",
  pword: "pass",
};

login.addEventListener("click", function (e) {
  e.preventDefault();

  if (username.value === user.uname && pass.value === user.pword) {
    alert("Login");
  } else if (username.value === "" && pass.value === "") {
    alert("Please Enter Credential");
  } else {
    alert("Wrong Credential");
  }
});

showPass.addEventListener("click", function () {
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
});
