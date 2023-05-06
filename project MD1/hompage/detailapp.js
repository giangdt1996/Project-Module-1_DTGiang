const user_login = JSON.parse(localStorage.getItem("user_login"));
const movies = JSON.parse(localStorage.getItem("listMovies")) || [];
const movieContent = document.getElementById("moviecontent");

let id = JSON.parse(localStorage.getItem("id"));

movieContent.innerHTML = `
      <div class="detail">
        <div>
          <img src=${id.posterUrl} alt="">
        </div>
        <div>
          <h3>${id.title}</h3>
          <hr>
          <div><b>Đạo diễn:</b> ${id.director}</div>
          <div><b>Diễn viên:</b> ${id.actors}</div>
          <div><b>Thể loại:</b> ${id.genre}</div>
          <div><b>Khởi chiếu:</b> ${id.releaseDate}</div>
          <div><b>Thời lượng:</b> ${id.duration}</div>
          <div><b>Ngôn ngữ:</b> ${id.language}</div>
          <div><b>Rated:</b> ${id.rating}</div>
          <button onclick="muave()" style="color:red;font-weight:600;background:none;border:none" >Mua Vé</button>
        </div>
      </div>
    `;

const eventNew = document.querySelector(".event-new");
for (let i = 0; i < movies.length; i++) {
  const html = `
    <li class="thanhviencgv"><i class="fa-regular fa-hand-point-right" id="finleft"></i>Chi tiết</li>
    <li class="uudai"><a href="${movies[i].trailerUrl}" target="_blank" style="text-decoration:none;color:white"><i class="fa-regular fa-hand-point-right" id="finright"></i>Trailer</a></li>
  `;

  eventNew.innerHTML = html;
}

const pdetail = document.querySelector(".pdetail");
for (let i = 0; i < movies.length; i++) {
  pdetail.textContent = `${id.description}`;
}
let username = user_login.name;
function muave() {
  if (!username) {
    alert("Bạn cần phải đăng nhập để Mua vé");
    window.location.href = "/login/login.html";
  } else {
    window.location.href = "/booking/booking.html";
  }
}
//hiển thị tên người dùng khi đăng nhập

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
