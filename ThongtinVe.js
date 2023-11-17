// Mảng chứa các chỗ ngồi đã chọn
let selectedSeats = [];

// Giá chỗ ngồi loại 1
const priceType1 = 100000;

// Giá chỗ ngồi loại 2
const priceType2 = 200000;

const combo = 100000;
// Hàm xử lý khi click vào nút chọn chỗ ngồi
function handleSeatClick(seat) {
  // Kiểm tra xem chỗ ngồi đã được chọn chưa
  if (selectedSeats.includes(seat)) {
    // Nếu đã chọn thì xóa khỏi mảng
    selectedSeats.splice(selectedSeats.indexOf(seat), 1);
  } else {
    // Nếu chưa chọn thì thêm vào mảng
    selectedSeats.push(seat);
  }

  // Cập nhật lại giá trị trên giao diện
  updateUI();
}

// Hàm cập nhật giao diện
function updateUI() {
  // Đếm số lượng chỗ ngồi đã chọn
  let totalSeats = selectedSeats.length;

  // Tính tổng giá tiền các chỗ ngồi đã chọn
  let totalPrice = 0;
  selectedSeats.forEach((seat) => {
    if (seat.id == 1) {
      totalPrice += combo + priceType1; //cộng giá ghế thường
    } else {
      totalPrice += combo + priceType2; //cộng giá ghế Vip
    }
  });

  // Cập nhật giá trị lên giao diện
  //document.getElementById("movie-price").innerText = priceType2;
  //document.getElementById("combo-price").innerText = 100000;
  //document.getElementById("total-price").innerText = totalPrice;
  // Cập nhật giá trị lên giao diện
  document.getElementById("movie-price").innerText = priceType2.toLocaleString(
    "vi-VN",
    {
      style: "currency",
      currency: "VND",
    }
  );

  document.getElementById("combo-price").innerText = combo.toLocaleString(
    "vi-VN",
    {
      style: "currency",
      currency: "VND",
    }
  );

  document.getElementById("total-price").innerText = totalPrice.toLocaleString(
    "vi-VN",
    {
      style: "currency",
      currency: "VND",
    }
  );

  document.getElementById("selected-seats").innerText = totalSeats;
}

// Sự kiện click cho các nút chọn chỗ ngồi
document.querySelectorAll(".sitting_gree, .sitting").forEach((seat) => {
  seat.addEventListener("click", () => {
    handleSeatClick(seat);
  });
});

// Mảng lưu các button đang được chọn
let selectedButtons = [];

const cangiuaButtons = document.querySelectorAll(".sitting_gree");
const phudeButtons = document.querySelectorAll(".sitting");

// Xử lý click cho cangiuaButtons
cangiuaButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleSelection(button);

    updateStyle();
  });
});

// Xử lý click cho phudeButtons
phudeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleSelection(button);

    updateStyle();
  });
});

function toggleSelection(button) {
  let index = selectedButtons.indexOf(button);

  if (index == -1) {
    selectedButtons.push(button);
  } else {
    selectedButtons.splice(index, 1);
    // Cập nhật style khi xóa
    resetStyle(button);
  }
}
//click button sẽ trả lại ban đầu
function resetStyle(button) {
  button.style.backgroundColor = "";
  button.style.color = "";
}

function updateStyle() {
  selectedButtons.forEach((button) => {
    button.style.backgroundColor = "red";
    button.style.color = "white";
  });
}
