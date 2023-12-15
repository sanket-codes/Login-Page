const username = document.querySelector("#username");
const pass = document.querySelector("#pass");
const login = document.querySelector("#login");

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
