
const pubSearch = document.getElementById("pubSearch");
pubSearch?.addEventListener("input", () => {
  const q = pubSearch.value.toLowerCase().trim();
  const activeFilter = document.querySelector(".filter.active")?.dataset.filter || "all";
  document.querySelectorAll(".publication").forEach(pub => {
    const tags = pub.dataset.tags || "";
    const text = pub.innerText.toLowerCase();
    pub.style.display = (activeFilter === "all" || tags.includes(activeFilter)) && (!q || text.includes(q)) ? "block" : "none";
  });
});
