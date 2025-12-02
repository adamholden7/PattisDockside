// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Menu tab switching
const tabs = document.querySelectorAll(".menu-tab");
const panels = document.querySelectorAll("[data-category-panel]");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const category = tab.getAttribute("data-category");

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    panels.forEach(panel => {
      if (panel.getAttribute("data-category-panel") === category) {
        panel.classList.remove("hidden");
      } else if (panel.getAttribute("data-category-panel") === "starters" && category === "starters") {
        panel.classList.remove("hidden");
      } else if (category !== "starters" && panel.getAttribute("data-category-panel") === "starters") {
        panel.classList.add("hidden");
      } else {
        panel.classList.add("hidden");
      }
    });
  });
});

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
