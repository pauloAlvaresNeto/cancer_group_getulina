let mainNavbar = document.querySelector(".mainNavbar");
let topNavbar = document.querySelector(".topNavbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    // 🔴 esconde a top navbar
    topNavbar.classList.add("d-none");

    // 🔵 adiciona classes bootstrap na main
    mainNavbar.classList.add("bg-white", "shadow-sm");
     mainNavbar.classList.remove("navbar-dark");
  } else {
    // 🔴 mostra a top navbar
    topNavbar.classList.remove("d-none");

    // 🔵 remove classes da main
    mainNavbar.classList.remove("bg-white", "shadow-sm");
    mainNavbar.classList.add("navbar-dark");
  }
});