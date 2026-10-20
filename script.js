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
  new Date().getFullYear();const s = siteData;
const safe = (v) => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
document.getElementById('services-list').innerHTML = s.services.map(x => `<article class="card"><div class="icon">${safe(x.icon)}</div><h3>${safe(x.title)}</h3><p>${safe(x.description)}</p></article>`).join('');
document.getElementById('gallery').innerHTML = s.photos.length ? s.photos.map((x,i)=>`<figure class="photo"><img src="${encodeURI(x.image)}" alt="${safe(x.title)}" loading="lazy"><figcaption>${safe(x.title)}</figcaption></figure>`).join('') : `<div class="gallery-empty"><span>▧</span><h3>Галерея готова для ваших фотографий</h3><p>Добавьте снимки в папку images и укажите их в data.js.</p></div>`;
document.getElementById('price-list').innerHTML = s.prices.map(g=>`<div class="price-group"><h3>${safe(g.category)}</h3>${g.items.map(([name,price])=>`<div class="price-row"><span>${safe(name)}</span><strong>${safe(price)}</strong></div>`).join('')}</div>`).join('');
document.getElementById('year').textContent = new Date().getFullYear();
