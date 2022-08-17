window.addEventListener("load", () => {
  const buttons = document.querySelectorAll("[data-comment-button]");
  const container = document.querySelector("#comment");
  const blockquote = container.querySelector("blockquote");
  const title = container.querySelector("#title");
  const name = container.querySelector("#name");
  const img = container.querySelector("img");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      container.classList.add("opacity-0");

      setTimeout(() => {
        blockquote.textContent = '"' + button.dataset.commentBlockquote + '"';
        title.textContent = button.dataset.commentTitle;
        name.textContent = button.dataset.commentName;
        img.src = button.dataset.commentImg;
        container.classList.remove("opacity-0");
      }, 300);

      buttons.forEach((b) => {
        b.classList.remove("bg-secondary");
        b.classList.add("bg-gray-200");
      });
      button.classList.remove("bg-gray-200");
      button.classList.add("bg-secondary");
    });
  });
});
