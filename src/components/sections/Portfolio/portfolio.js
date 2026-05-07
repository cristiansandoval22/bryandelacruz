import GLightbox from "glightbox";

document.addEventListener("DOMContentLoaded", () => {
  /* Lightbox */
  GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true
  });

  const tabs = document.querySelectorAll(".portfolio-tab");
  const cards = document.querySelectorAll(".portfolio__card");
  const button = document.querySelector(".portfolio__more");

  if (!tabs.length || !cards.length) return;

  let currentFilter = "Todos";
  let visible = 3;
  const step = 3;

  function normalize(value) {
  return value
    ?.toString()
    .trim()
    .toLowerCase();
}

function updateCards() {
  const filtered = [...cards].filter((card) => {
    const category = normalize(card.dataset.category);
    const filter = normalize(currentFilter);

    return filter === "todos" || category === filter;
  });

  cards.forEach((card) => {
    card.style.display = "none";
  });

  filtered.forEach((card, index) => {
    if (index < visible) {
      card.style.display = "block";
    }
  });

  if (button) {
    button.style.display =
      filtered.length > visible ? "inline-flex" : "none";
  }
}

  /* Tabs */
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      currentFilter = tab.dataset.filter || "Todos";
      visible = 3;

      updateCards();
    });
  });

  /* Botón ver más */
  button?.addEventListener("click", () => {
    visible += step;
    updateCards();
  });

  /* inicial */
  tabs[0].classList.add("active");
  updateCards();
});
