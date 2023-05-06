let btnIn = document.getElementById("in");
let btnReg = document.getElementById("reg");
let login = document.getElementsByClassName("login");
let register = document.getElementsByClassName("register");
const user_login = JSON.parse(localStorage.getItem("user_login")) || [];
// console.log(form);

btnIn.onclick = function () {
  register.style.display = "none";
};
btnReg.onclick = function () {
  login.style.display = "none";
  register.style.display = "block";
};
const admin = JSON.parse(localStorage.getItem("admin"));
localStorage.setItem("admin", JSON.stringify(admin));
function handleLoginForm() {
  const mail = document.querySelector("#floatingInput").value;
  console.log(mail);
  const password = document.querySelector("#floatingPassword").value;
  console.log(password);
  const listUser = JSON.parse(localStorage.getItem("listUser")) || [];

  // const user = { mail: "mamcoi", password: "mamcoi123" };
  // listUser.push(user);
  // localStorage.setItem("listUser", JSON.stringify(listUser));
  let users = null;
  let found = false;
  for (let i = 0; i < listUser.length; i++) {
    if (mail === listUser[i].email && password === listUser[i].password) {
      users = listUser[i];
      found = true;
      break;
    }
  }

  if (!found) {
    alert("Email hoặc mật khẩu không đúng");
  }

  if (mail === admin.mail && password === admin.password) {
    window.location.href = "/admin/admin.html";
  } else if (users !== null) {
    localStorage.setItem("user_login", JSON.stringify(users));
    window.location.href = "/hompage/user.html";
  }
}
const form = document.getElementById("login");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  handleLoginForm();
});
