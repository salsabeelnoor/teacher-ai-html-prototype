"use strict";

/*----------------- nav bar variables --------------------*/
const navLinks = document.querySelectorAll(".side-nav a");
const sections = document.querySelectorAll("section");
const navLinksMb = document.querySelectorAll("nav a");

function scrollChange(navLinks) {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      currentSection = sections[sections.length - 1].id;
    } else if (
      window.scrollY >= sectionTop - sectionHeight / 2 &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === currentSection) {
      link.classList.add("active");
    }
    /*---------------------------------------------------- */
    if (window.innerWidth <= 992) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
          const sectionEl = document.querySelector(href);
          window.scrollTo({
            behavior: "smooth",
            top:
              sectionEl.getBoundingClientRect().top -
              document.body.getBoundingClientRect().top -
              50,
          });
        }
      });
    }
  });
}
document.addEventListener("scroll", () => {
  window.innerWidth <= 992 ? scrollChange(navLinksMb) : scrollChange(navLinks);
});
