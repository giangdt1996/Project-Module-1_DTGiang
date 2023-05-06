const movies = JSON.parse(localStorage.getItem("listMovies")) || [];
const movie = document.querySelector("#movie");
let form = document.querySelector("form");
const user_login = JSON.parse(localStorage.getItem("user_login")) || [];
const booking = JSON.parse(localStorage.getItem("booking")) || [];
let usermail = user_login.email;
for (i = 0; i < movies.length; i++) {
  movie.innerHTML += `<option value="${movies[i].title}">${movies[i].title}</option>`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let date = document.querySelector("#date").value;
  let time = document.querySelector("#time").value;
  let theater = document.querySelector("#theater").value;
  let movie = document.querySelector("#movie").value;

  let selectedSeats = document.querySelectorAll(".mySpan");
  let seatamount = Array.from(selectedSeats).map((seat) => seat.innerText);
  let seats = seatamounts.length;
  let nbooking = {
    movie,
    date,
    time,
    theater,
    seatamount,
    seats,
    usermail,
  };

  for (let i = 0; i < booking.length; i++) {
    if (
      movie == booking[i].movie &&
      date == booking[i].date &&
      theater == booking[i].theater &&
      time == booking[i].time &&
      booking[i].seatamount.some((seat) => seatamount.includes(seat))
    ) {
      alert("Ghế " + `${seatamount}` + " đã có người đặt trước");
      return;
    }
  }

  const newbooking = booking.concat(nbooking);
  localStorage.setItem("booking", JSON.stringify(newbooking));
  alert("Đã lưu thông tin đặt vé");
  window.location.href = "/thanhtoan/thanhtoan.html";
});

// let time = document.querySelector("#time").value;
// let theater = document.querySelector("#theater").value;
// let movie = document.querySelector("#movie").value;
// let seats = seatamount.length;
// let nbooking = {
//   movie,
//   date,
//   time,
//   theater,
//   seats,
//   usermail,
// };

// const newbooking = booking.push(nbooking);
// localStorage.setItem("booking", JSON.stringify(newbooking));
// alert("Đã lưu thông tin đặt vé");
// window.location.href = "/thanhtoan/thanhtoan.html";

//MODAL
let box = document.getElementById("box");
let ghe = document.getElementById("chosedseats");
let price = document.getElementById("price");
let total = document.getElementById("total");
let amount = document.getElementById("amount");
const boxData = JSON.parse(localStorage.getItem("boxData"));

// localStorage.setItem("boxData",JSON.stringify(boxData))

const boxElement = document.getElementById("box");

for (let i = 0; i < boxData.length; i++) {
  const rowElement = document.createElement("div");
  rowElement.className = "row" + (i + 1);
  for (let j = 0; j < boxData[i].length; j++) {
    const spanElement = document.createElement("span");
    spanElement.innerHTML = boxData[i][j];
    rowElement.appendChild(spanElement);
  }
  boxElement.appendChild(rowElement);
}

box.addEventListener("click", function (e) {
  seatamounts = [];
  let mySpan = document.getElementsByClassName("mySpan");
  ghe.innerText = "  ";
  if (e.target.tagName === "SPAN") {
    // Chỉ xử lý khi click vào phần tử là thẻ span
    const targetSpan = e.target;
    if (targetSpan.classList.contains("mySpan")) {
      targetSpan.classList.remove("mySpan");

      for (let i = 0; i < mySpan.length; i++) {
        ghe.innerText += " " + mySpan[i].innerText;
        seatamounts.push(ghe.innerText);
      }
      amount.innerHTML = `<b>Số lượng vé</b> ${seatamouns.length}`;
    } else {
      targetSpan.classList.add("mySpan");
      for (let i = 0; i < mySpan.length; i++) {
        ghe.innerText += " " + mySpan[i].innerText;
        seatamounts.push(ghe.innerText);

        amount.innerHTML = `<b>Số lượng vé</b> ${seatamounts.length}`;
        // selectedSeatsCount++;
      }
    }
  }
});

let username = user_login.name;
if (username) {
  var greeting = document.querySelector(".greeting");
  greeting.innerHTML = `<a href="/history/history.html" style="text-decoration:none;color:black">XIN CHÀO ${username}</a>
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
