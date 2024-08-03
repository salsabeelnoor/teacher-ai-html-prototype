"use strict";

/*----------------- nav bar variables --------------------*/
const navbar = document.getElementById("top-nav");
const navbarMobile = document.getElementById("nav-mobile");
const offcanvas = document.getElementById("offcanvasExample");
const offcanvasBtn = document.getElementById("offcanvas-btn");



function navScrollFunction() {
    if (document.documentElement.scrollTop > 0 ) {
      navbar.classList.add("on-scroll");
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
      navbar.style.transition = "all 0.24s ease-in"
      navbarMobile.classList.add("on-scroll");
      navbarMobile.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
      navbarMobile.style.transition = "all 0.24s ease-in"

    }
    else {
      navbar.classList.remove("on-scroll");
      navbar.style.backgroundColor = "transparent";
      navbarMobile.classList.remove("on-scroll");
      navbarMobile.style.backgroundColor = "transparent";
      // if(screen.width <  992 && !offcanvas.classList.contains('show')){
      // }
    }

}
document.addEventListener("scroll", () => {
  navScrollFunction();
});