const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

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

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

//validacao de login
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();  // Evita que o formulário seja enviado automaticamente

  var username = document.getElementById("login-username").value;
  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;

  if (email === "joaoarthur@gmail.com" && username === "joao arthur" && password === "1234") {
    window.location.href = "Dashboard.html";
    // Aqui você pode redirecionar o usuário para outra página ou realizar outras ações necessárias após o login bem-sucedido
    // window.location.href = "página_inicial.html";
  } else {
    alert("Informações de login incorretas. Por favor, tente novamente.");
  }
});
