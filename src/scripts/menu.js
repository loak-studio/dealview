window.addEventListener("load", () => {
  const button = document.querySelector("#hamburger");
  const nav = document.querySelector("#nav");
  button.addEventListener("click", () => {
    nav.classList.toggle("-translate-x-full");
  });
});
