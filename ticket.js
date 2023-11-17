// Biến lưu trữ các nút đang được chọn
let selectedCangiuaButton;
let selectedPhudeButton;
let selectedDateButton;
let selectedTimeButton;


const cangiuaButtons = document.querySelectorAll(".cangiua");
const phudeButtons = document.querySelectorAll(".phude");
const dateButtons = document.querySelectorAll(".date");
const timeButtons = document.querySelectorAll(".Time");

// Xử lý click nút .cangiua
cangiuaButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Bỏ chọn nút cũ
    if (selectedCangiuaButton) {
      selectedCangiuaButton.style.backgroundColor = "";
      selectedCangiuaButton.style.color = "";
    }

    // Chọn nút mới
    selectedCangiuaButton = button;
    button.style.backgroundColor = "black";
    button.style.color = "white";
  });
});

// Xử lý click nút .phude
phudeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Bỏ chọn nút cũ
    if (selectedPhudeButton) {
      selectedPhudeButton.style.backgroundColor = "";
      selectedPhudeButton.style.color = "";
    }

    // Chọn nút mới
    selectedPhudeButton = button;
    button.style.backgroundColor = "black";
    button.style.color = "white";
  });
});

// Xử lý click nút .date
dateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Bỏ chọn nút cũ
    if (selectedDateButton) {
      selectedDateButton.style.backgroundColor = "";
      selectedDateButton.style.color = "";
    }

    // Chọn nút mới
    selectedDateButton = button;
    button.style.backgroundColor = "black";
    button.style.color = "white";
  });
});

// Xử lý click nút .time
timeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Bỏ chọn nút cũ
    if (selectedTimeButton) {
      selectedTimeButton.style.backgroundColor = "";
      selectedTimeButton.style.color = "";
    }

    // Chọn nút mới
    selectedTimeButton = button;
    button.style.backgroundColor = "black";
    button.style.color = "white";
  });
});


