const booking = JSON.parse(localStorage.getItem("booking")) || [];
const user_login = JSON.parse(localStorage.getItem("user_login")) || [];
// localStorage.setItem("booking", JSON.stringify([]));
let confirm = document.querySelector(".btn-confirm");
for (let i = 0; i < booking.length; i++) {
  if (booking[i].usermail == user_login.email) {
    const theaterName = document.querySelector("#theater-name");
    const movieName = document.querySelector("#movie-name");
    const bookingDate = document.querySelector("#booking-date");
    const bookingTime = document.querySelector("#booking-time");
    const bookingSeats = document.querySelector("#booking-seats");
    const ticketPrice = document.querySelector("#ticket-price");
    const totalPrice = document.querySelector("#total-price");

    theaterName.textContent = "Rạp: " + booking[i].theater;
    movieName.textContent = booking[i].movie;
    bookingDate.textContent = booking[i].date;
    bookingTime.textContent = booking[i].time;
    bookingSeats.textContent = booking[i].seats;

    const ticketPriceValue = 80000;
    const ticketPriceFormatted = ticketPriceValue.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    ticketPrice.textContent = ticketPriceFormatted;

    const totalValue = booking[i].seats * ticketPriceValue;
    const totalValueFormatted = totalValue.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    totalPrice.innerHTML = `<b>TỔNG TIỀN THANH TOÁN: ${totalValueFormatted}</b>`;

    // document.querySelector("#invoice-container").style.display = "block";
  }
}

confirm.onclick = function () {
  alert("XIN CẢM ƠN");
  window.location.href = "/history/history.html";
};

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
