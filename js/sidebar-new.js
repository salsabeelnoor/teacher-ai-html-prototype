let sidebar = document.querySelector(".sidebar");
let closeBtn = document.getElementById("btn");
// let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});


function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("fa-bars", "fa-bars-staggered");
    // sidebar.style.overflowY="auto";
  } else {
    closeBtn.classList.replace("fa-bars-staggered", "fa-bars");
    // sidebar.style.overflowY="visible";
  }
}