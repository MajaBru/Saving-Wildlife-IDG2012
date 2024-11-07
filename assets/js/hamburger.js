
/* Referring to source https://www.youtube.com/watch?v=flItyHiDm7E 
for helping out with hamburger menu.*/

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// handle the aria expanded and label to give more concise description of the state

menuToggle.addEventListener("click", function () {

  if (navMenu.classList.contains("active")) {

    this.setAttribute("aria-expanded", "true");
    this.setAttribute("aria-label", "opened menu");
    
  } else {
    this.setAttribute("aria-label", "closed menu");
    this.setAttribute("aria-expanded", "false");
  }
});