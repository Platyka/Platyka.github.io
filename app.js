const headBtn = document.querySelector(".nav__btn");
const mobileClose = document.querySelector(".nav-mobile__close");
const navMobile = document.querySelector(".nav-mobile");
const navMobileLinks = document.querySelectorAll(".nav-mobile__link");
const contactBtn = document.querySelector(".contact__btn");
const modal = document.querySelector(".contact-cta");
const container = document.querySelector(".container");
const modalCloseBtn = document.querySelector(".contact-cta__close");

if (headBtn) {
  headBtn.addEventListener("click", () => {
    navMobile.classList.add("open");
  });
}

if(mobileClose) {
  mobileClose.addEventListener("click", () => {
    navMobile.classList.remove("open");
  })
}

if (navMobile) {
  for (i = 0; i < navMobileLinks.length; i++) {
    navMobileLinks[i].addEventListener("click", () => {
      navMobile.classList.remove("open"); 
    });
  }
}

contactBtn.addEventListener("click", () => {
  modal.classList.add("open-modal");
  container.classList.add("blur");
});

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("open-modal");
    container.classList.remove("blur");
  });
}