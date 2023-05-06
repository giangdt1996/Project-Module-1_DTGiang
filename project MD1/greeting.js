const user_login = JSON.parse(localStorage.getItem("user_login"));
let username = user_login.name;
if (username) {
  var greeting = document.querySelector(".greeting");
  greeting.innerHTML = `<a href="/history/history.html" style="text-decoration:none;color:black">XIN CHÀO   ${username}</a>
  <button onclick="logout()" style="border:none">THOÁT</button>`;
} else {
  var greeting = document.querySelector(".greeting");
  greeting.innerHTML = `<a id="btn-login-sigin" href="../login/login.html" class="loginout" target="_blank" style="text-decoration:none;color:black"><i class="fa-solid fa-circle-user"></i>ĐĂNG NHẬP/ĐĂNG KÝ</a>
  `;
}

function logout() {
  alert("ĐĂNG XUẤT THÀNH CÔNG");
  localStorage.setItem("user_login", JSON.stringify({}));
  window.location.href = "/hompage/homepage.html";
}
