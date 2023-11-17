// Biến kiểm tra đã chuyển slide chưa
let isSliding = false;

// Lấy các phần tử
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next'); 

// Biến lưu slide hiện tại
let currentSlide = 0;

// Hàm chuyển slide  
function setSlide() {

  slides.forEach(slide => {
    slide.classList.remove('active');
    slide.style.transform = 'scale(0.95)';
  });

  slides[currentSlide].classList.add('active');
  slides[currentSlide].style.transform = 'scale(1)';

}

// Xử lý sự kiện click nút
nextBtn.addEventListener('click', () => {
  currentSlide++;
  if(currentSlide >= slides.length) currentSlide = 0;
  setSlide();
}); 

prevBtn.addEventListener('click', () => {
  currentSlide--;
  if(currentSlide > slides.length) currentSlide = 0;
  setSlide();
});

// Chuyển slide khi kéo chuột
document.addEventListener('mousemove', (e) => {

  if(!isSliding) {

    isSliding = true;

    // Xử lý chuyển slide khi di chuột
    if(e.pageX > window.innerWidth/2) {
      currentSlide++;  
    } else {
      currentSlide--;
    }

    setSlide();

    isSliding = false;

  }

});
