// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Menu tab switching
// (Replace your existing tab handler with this version)

const tabs = document.querySelectorAll(".menu-tab");
const panels = document.querySelectorAll("[data-category-panel]");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const category = tab.getAttribute("data-category");

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    panels.forEach(panel => {
      panel.classList.toggle(
        "hidden",
        panel.getAttribute("data-category-panel") !== category
      );
    });
  });
});


// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
