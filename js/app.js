(() => {
  const { WHATSAPP_NUMBER, getProduct } = window.LumaData;
  const drawer = document.querySelector("#drawer");
  const backdrop = document.querySelector("#drawer-backdrop");
  const setDrawer = (open) => { drawer?.classList.toggle("open", open); backdrop?.classList.toggle("open", open); document.body.classList.toggle("is-locked", open); };
  document.querySelector("#open-menu")?.addEventListener("click", () => setDrawer(true));
  document.querySelector("#close-menu")?.addEventListener("click", () => setDrawer(false));
  backdrop?.addEventListener("click", () => setDrawer(false));


  
document.querySelectorAll(".tabs [data-tags]").forEach((button) => button.addEventListener("click", () => {
  const tag = button.dataset.tags;
  document.querySelectorAll(".tabs [data-tags]").forEach((item) => item.classList.toggle("active", item === button));
  const cards = [...document.querySelectorAll("[data-product-grid] .product-card")];
  cards.forEach((card) => { card.hidden = tag !== "all" && !card.dataset.tags.split(" ").includes(tag); });
  const visible = cards.filter((card) => !card.hidden).length;
  const count = document.querySelector("[data-product-count]");
  if (count) count.textContent = `${visible} ${visible === 1 ? "Producto" : "Productos"}`;
  document.querySelectorAll(".filter-dropdown").forEach((dropdown) => {
    const toggle = dropdown.querySelector(".filter-dropdown-toggle");
    const label = toggle.querySelector("[data-filter-label]");
    const selected = dropdown.querySelector("[data-tags].active");
    toggle.classList.toggle("has-selection", !!selected);
    label.textContent = selected ? selected.textContent : "Más filtros";
  });
}));

document.querySelectorAll(".filter-dropdown-toggle").forEach((toggle) => toggle.addEventListener("click", () => {
  const dropdown = toggle.closest(".filter-dropdown");
  const isOpen = dropdown.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
}));
document.querySelectorAll(".filter-dropdown [data-tags]").forEach((option) => option.addEventListener("click", () => {
  const dropdown = option.closest(".filter-dropdown");
  dropdown.classList.remove("open");
  dropdown.querySelector(".filter-dropdown-toggle").setAttribute("aria-expanded", "false");
}));
document.addEventListener("click", (event) => {
  document.querySelectorAll(".filter-dropdown.open").forEach((dropdown) => { if (!dropdown.contains(event.target)) dropdown.classList.remove("open"); });
});



  document.querySelectorAll("[data-newsletter]").forEach((form) => form.addEventListener("submit", (event) => { event.preventDefault(); const message = form.parentElement.querySelector("[data-newsletter-message]"); message.textContent = "Gracias por suscribirte."; form.reset(); }));
  document.querySelector("[data-whatsapp-contact]")?.setAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quisiera recibir asesoría personalizada de LUMA.")}`);

  
  const detail = document.querySelector("[data-product-detail]");
if (detail) {
  const id = new URLSearchParams(window.location.search).get("producto");
  const product = getProduct(id) || getProduct("pulsera-rio-de-luz");

  const gallery = detail.querySelector("[data-gallery]");
  const galleryTrack = gallery.querySelector("[data-gallery-track]");
  const galleryDots = gallery.querySelector("[data-gallery-dots]");
  const galleryPrev = gallery.querySelector("[data-gallery-prev]");
  const galleryNext = gallery.querySelector("[data-gallery-next]");
  const images = product.images && product.images.length ? product.images : [product.image];
  let current = 0;

  galleryTrack.innerHTML = "";
  galleryDots.innerHTML = "";
  images.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src; img.alt = `${product.name} - foto ${i + 1}`;
    img.addEventListener("mousemove", (event) => {
      const rect = img.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      img.style.transformOrigin = `${x}% ${y}%`;
    });
    galleryTrack.appendChild(img);

    const dot = document.createElement("button");
    dot.type = "button"; dot.setAttribute("aria-label", `Ver foto ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    galleryDots.appendChild(dot);
  });

  function goTo(index) {
    current = (index + images.length) % images.length;
    galleryTrack.style.transform = `translateX(-${current * 100}%)`;
    [...galleryDots.children].forEach((dot, i) => dot.classList.toggle("active", i === current));
  }
  goTo(0);

  const hasMultiple = images.length > 1;
  galleryPrev.hidden = !hasMultiple; galleryNext.hidden = !hasMultiple; galleryDots.hidden = !hasMultiple;
  galleryPrev.addEventListener("click", () => goTo(current - 1));
  galleryNext.addEventListener("click", () => goTo(current + 1));

  detail.querySelector("[data-product-script]").textContent = product.script; detail.querySelector("[data-product-category]").textContent = `Colección de ${product.category}`;
  detail.querySelector("[data-product-name]").textContent = product.name; detail.querySelector("[data-product-price]").textContent = product.price; detail.querySelector("[data-product-description]").textContent = product.description;
  const back = detail.querySelector("[data-product-back]"); back.href = `${product.category}.html`; back.textContent = `← Volver a ${product.category}`;
  product.properties.forEach(([title, text], index) => { const titleNode = detail.querySelector(`[data-property-title="${index}"]`); const textNode = detail.querySelector(`[data-property-text="${index}"]`); if (titleNode && textNode) { titleNode.textContent = title; textNode.textContent = text; titleNode.closest(".property").hidden = false; } });
  detail.querySelector("[data-whatsapp-product]").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola, me interesa la pieza ${product.name} de LUMA.`)}`;
}



  
const track = document.querySelector(".carousel-track");
if (track) {

const cards = document.querySelectorAll(".product-card");

const prev = document.querySelector(".carousel-btn.prev");
const next = document.querySelector(".carousel-btn.next");

const visibles = 3;
let index = 0;

function mover(){
    const ancho = cards[0].offsetWidth;
    track.style.transform = `translateX(-${index*ancho}px)`;
}

function siguiente(){
    if(index >= cards.length-visibles){ index=0; } else { index++; }
    mover();
}

function anterior(){
    if(index<=0){ index=cards.length-visibles; } else { index--; }
    mover();
}

next.addEventListener("click",()=>{ siguiente(); reiniciarAuto(); });
prev.addEventListener("click",()=>{ anterior(); reiniciarAuto(); });
window.addEventListener("resize",mover);

//------------- Carrusel automático -------------

let auto = setInterval(siguiente,3000);

function reiniciarAuto(){
    clearInterval(auto);
    auto = setInterval(siguiente,3000);
}

}



})();
