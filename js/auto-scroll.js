const selectBtn = document.querySelectorAll(".select-btn");
function smoothScrollToSections() {
  selectBtn.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(link);
      const href = link.getAttribute("href");
      //extract id
      const fragment = href.split("#")[1] ? "#" + href.split("#")[1] : "";
      // Scroll to other links=
      // console.log(fragment);
      const sectionEl = document.querySelector(fragment);
      window.scrollTo({
        behavior: "smooth",
        top:
          sectionEl.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          100,
      });
    });
  });
}

document.addEventListener("scroll", () => {
  smoothScrollToSections();
});
