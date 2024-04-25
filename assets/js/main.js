document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll(".input-field");
    const toggle_btn = document.querySelectorAll(".toggle");
    const main = document.querySelector("main");
    const bullets = document.querySelectorAll(".bullets span");
    const images = document.querySelectorAll(".image");
    const intervalTime = 2000; // 2 seconds
  
    let currentIndex = 0;
    let interval;
  
    function startSlider() {
      interval = setInterval(() => {
        currentIndex++;
        if (currentIndex > images.length - 1) {
          currentIndex = 0;
        }
        changeImage(currentIndex);
      }, intervalTime);
    }
  
    function changeImage(index) {
      images.forEach((img) => img.classList.remove("show"));
      bullets.forEach((bull) => bull.classList.remove("active"));
      
      images[index].classList.add("show");
      bullets[index].classList.add("active");
      
      const textSlider = document.querySelector(".text-group");
      textSlider.style.transform = `translateY(${-(index) * 2.2}rem)`;
    }
  
    inputs.forEach((inp) => {
      inp.addEventListener("focus", () => {
        inp.classList.add("active");
      });
      inp.addEventListener("blur", () => {
        if (inp.value != "") return;
        inp.classList.remove("active");
      });
    });
  
    toggle_btn.forEach((btn) => {
      btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
      });
    });
  
    function moveSlider() {
      let index = this.dataset.value;
      changeImage(index - 1);
      currentIndex = index - 1;
      clearInterval(interval);
      startSlider();
    }
  
    bullets.forEach((bullet) => {
      bullet.addEventListener("click", moveSlider);
    });
  
    startSlider(); // Start the slider initially
  });
  