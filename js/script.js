// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika food menu di klik
document.querySelector("#food-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const food = document.querySelector("#food-menu");

document.addEventListener("click", function (e) {
  if (!food.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
