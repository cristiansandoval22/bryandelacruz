import GLightbox from "glightbox";

document.addEventListener("DOMContentLoaded", () => {
  // Lightbox
  GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true
  });

  // Tabs
  const tabs = document.querySelectorAll(".portfolio-tab");
  const cards = document.querySelectorAll(".portfolio__card");

  if (!tabs.length || !cards.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.dataset.filter;

      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      cards.forEach((card) => {
        const category = card.dataset.category;

        if (filter === "Todos" || category === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  tabs[0].classList.add("active");



  const button = document.querySelector(".portfolio__more");

  let visible = 3;
  const step = 3;

  cards.forEach((card, index) => {
    if(index >= visible){
      card.style.display = "none";
    }
  });

  button?.addEventListener("click", () => {
    visible += step;

    cards.forEach((card, index) => {
      if(index < visible){
        card.style.display = "block";
      }
    });

    if(visible >= cards.length){
      button.style.display = "none";
    }
  });
});

