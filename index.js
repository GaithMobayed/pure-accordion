const list = document.querySelector("#list");

list.addEventListener("click", (e) => {
  const question = e.target.closest(".question");

  if (!question) return;

  const item = question.closest(".item");

  const activeItem = list.querySelector(".item.active");

  if (activeItem && activeItem !== item) {
    activeItem.classList.remove("active");
  }

  item.classList.toggle("active");
});