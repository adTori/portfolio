const toggleBtn = document.querySelector(".toggle-btn");
const navList = document.querySelector(".nav-list");
const links = document.querySelectorAll(".link");
const pages = document.querySelectorAll(".page");

// öppna/stäng meny
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  navList.classList.toggle("show");
});

// klick på meny
links.forEach(link => {
  link.addEventListener("click", () => {

    // byt sida
    pages.forEach(p => p.classList.remove("active"));
    const currentPage = document.querySelector("." + link.dataset.page);
    currentPage.classList.add("active");

    // ✅ lägg till/ta bort body-klass för att gömma namnet
    if (link.dataset.page === "home") {
      document.body.classList.add("home-active");
    } else {
      document.body.classList.remove("home-active");
    }

    // stäng meny
    navList.classList.remove("show");
    toggleBtn.classList.remove("active");
  });
});