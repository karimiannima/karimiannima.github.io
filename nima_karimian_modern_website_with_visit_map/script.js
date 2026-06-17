const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);

const themeToggle = document.getElementById("themeToggle");
themeToggle?.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  themeToggle.innerHTML = next === "dark" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
});

document.querySelector(".menu-toggle")?.addEventListener("click", () => {
  document.querySelector(".nav")?.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(a => {
  a.addEventListener("click", () => document.querySelector(".nav")?.classList.remove("open"));
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    document.querySelectorAll(".publication").forEach(pub => {
      const tags = pub.dataset.tags || "";
      pub.style.display = filter === "all" || tags.includes(filter) ? "block" : "none";
    });
  });
});

function animateNumber(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  const duration = 1200;
  const start = performance.now();
  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(value * progress).toLocaleString();
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

fetch("scholar_data.json")
  .then(r => r.json())
  .then(data => {
    animateNumber("citationCount", data.citations || 0);
    animateNumber("hIndex", data.h_index || 0);
    animateNumber("i10Index", data.i10_index || 0);
  })
  .catch(() => {
    animateNumber("citationCount", 0);
    animateNumber("hIndex", 0);
    animateNumber("i10Index", 0);
  });

document.getElementById("year").textContent = new Date().getFullYear();
