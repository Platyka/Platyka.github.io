const headBtn = document.querySelector(".nav__btn");
const mobileClose = document.querySelector(".nav-mobile__close");
const navMobile = document.querySelector(".nav-mobile");

if (headBtn) {
  headBtn.addEventListener("click", () => {
    navMobile.classList.add("open");
    navMobile.classList.remove("close");
  });
}

if(mobileClose) {
  mobileClose.addEventListener("click", () => {
    navMobile.classList.add("close");
    navMobile.classList.remove("open");
  })
}
