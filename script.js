const s = window.BUD_STROY;

const safe = (v) => String(v ?? "").replace(/[&<>"']/g, c => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}[c]));

document.getElementById("services-list").innerHTML =
  s.services.map(item => `
    <div class="service-card">
      <h3>${safe(item.name)}</h3>
      <p>Профессиональное выполнение работ</p>
    </div>
  `).join("");

document.getElementById("price-list").innerHTML =
  s.services.map(item => `
    <div class="price-row">
      <span>${safe(item.name)}</span>
      <strong>${safe(item.price)} грн/${safe(item.unit)}</strong>
    </div>
  `).join("");

document.getElementById("gallery").innerHTML = "";

document.getElementById("year").textContent =
