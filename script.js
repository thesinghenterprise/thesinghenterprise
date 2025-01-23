document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("navbarButton");
  let navList = document.getElementById("navList");

  button.addEventListener("click", () => {
    navList.classList.toggle("hidden");
    navList.classList.toggle("flex");
  });
});
