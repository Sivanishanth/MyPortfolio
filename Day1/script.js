document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    toggle.textContent = "☀️";
  }

  // Toggle theme on click
  toggle.addEventListener("click", () => {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      toggle.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      toggle.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });
});
