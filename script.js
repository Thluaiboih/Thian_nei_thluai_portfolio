// function toggleMenu() {
document.getElementById("navLinks").classList.toggle("active");
// }
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

if (window.innerWidth <= 768) {
  sections.forEach((sec, i) => {
    sec.style.display = i === 0 ? "block" : "none";
  });
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      sections.forEach((sec) => (sec.style.display = "none"));
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.style.display = "block";
    });
  });
} else {
  sections.forEach((sec) => (sec.style.display = "block"));
}
