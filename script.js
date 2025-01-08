document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".fade-in");
  fadeInElements.forEach((element) => {
    element.style.opacity = "1";
    element.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";
  });
});
