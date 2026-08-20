(() => {
  const { WHATSAPP_NUMBER, getProduct } = window.LumaData;
  const drawer = document.querySelector("#drawer");
  const backdrop = document.querySelector("#drawer-backdrop");
  const setDrawer = (open) => { drawer?.classList.toggle("open", open); backdrop?.classList.toggle("open", open); document.body.classList.toggle("is-locked", open); };
  document.querySelector("#open-menu")?.addEventListener("click", () => setDrawer(true));
  document.querySelector("#close-menu")?.addEventListener("click", () => setDrawer(false));
  backdrop?.addEventListener("click", () => setDrawer(false));
 
  // ---- Modo oscuro ----
const THEME_KEY = "luma-theme";
const root = document.documentElement;
const applyTheme = (theme) => {
  root.setAttribute("data-theme", theme);
  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.classList.toggle("is-active", theme === "dark");
    btn.setAttribute("aria-pressed", theme === "dark");
  });
};
applyTheme(localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light");
document.querySelectorAll(".theme-toggle").forEach((btn) => btn.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
}));

  // ---- Carrusel de imagen del hero ----
  const heroCarousel = document.querySelector("[data-hero-carousel]");
  if (heroCarousel) {
    const slides = [...heroCarousel.querySelectorAll(".hero-slide")];
    const dotsContainer = heroCarousel.querySelector("[data-hero-dots]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 
    if (slides.length > 1) {
      let current = 0;
      let auto;
 
      const dots = slides.map((_, i) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "hero-dot" + (i === 0 ? " is-active" : "");
        dot.setAttribute("aria-label", `Ir a la imagen ${i + 1} del hero`);
        dot.addEventListener("click", () => { goTo(i); restartAuto(); });
        dotsContainer.appendChild(dot);
        return dot;
      });
 
      function goTo(i) {
        slides[current].classList.remove("is-active");
        dots[current].classList.remove("is-active");
        current = i;
        slides[current].classList.add("is-active");
        dots[current].classList.add("is-active");
      }
 
      function nextSlide() { goTo((current + 1) % slides.length); }
 
      function restartAuto() {
        if (prefersReducedMotion) return;
        clearInterval(auto);
        auto = setInterval(nextSlide, 5000);
      }
 
      restartAuto();
      heroCarousel.addEventListener("mouseenter", () => clearInterval(auto));
      heroCarousel.addEventListener("mouseleave", restartAuto);
    }
  }
 
 
  
const productGrid = document.querySelector("[data-product-grid]");
const usesGroupFilters = !!document.querySelector("[data-filter-group]");
if (productGrid && !usesGroupFilters) {
  const PRODUCTS_PER_PAGE = 12;
  const allCards = [...productGrid.querySelectorAll(".product-card")];
  const countLabel = document.querySelector("[data-product-count]");
  const pagination = document.createElement("nav");
  pagination.className = "pagination";
  pagination.setAttribute("aria-label", "Paginación de productos");
  productGrid.insertAdjacentElement("afterend", pagination);
 
  let activeTag = "all";
  let currentPage = 1;
 
  const matchesTag = (card) => activeTag === "all" || (card.dataset.tags || "").split(" ").includes(activeTag);
 
  function getPageWindow(current, total) {
    // En pantallas angostas mostrar todos los números puede desbordar,
    // así que se recorta a: primera, última, y un rango alrededor de
    // la página actual, con "…" donde se salta algo.
    const delta = window.innerWidth <= 480 ? 0 : 1;
    const pages = [];
    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) pages.push(i);
    }
    const withDots = [];
    let prev;
    pages.forEach((page) => {
      if (prev !== undefined) {
        if (page - prev === 2) withDots.push(prev + 1);
        else if (page - prev > 2) withDots.push("…");
      }
      withDots.push(page);
      prev = page;
    });
    return withDots;
  }
 
  function renderPaginationControls(totalPages) {
    pagination.innerHTML = "";
    if (totalPages <= 1) return;
    const addButton = (label, page, { active = false, disabled = false, ariaLabel } = {}) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "pagination-btn" + (active ? " active" : "");
      button.textContent = label;
      button.disabled = disabled;
      button.setAttribute("aria-label", ariaLabel || `Ir a la página ${page}`);
      if (active) button.setAttribute("aria-current", "page");
      button.addEventListener("click", () => {
        currentPage = page;
        renderGrid();
        productGrid.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      pagination.appendChild(button);
    };
    const addEllipsis = () => {
      const span = document.createElement("span");
      span.className = "pagination-ellipsis";
      span.textContent = "…";
      span.setAttribute("aria-hidden", "true");
      pagination.appendChild(span);
    };
    addButton("‹", currentPage - 1, { disabled: currentPage === 1, ariaLabel: "Página anterior" });
    getPageWindow(currentPage, totalPages).forEach((page) => {
      if (page === "…") addEllipsis();
      else addButton(String(page), page, { active: page === currentPage });
    });
    addButton("›", currentPage + 1, { disabled: currentPage === totalPages, ariaLabel: "Página siguiente" });
  }
 
  function renderGrid() {
    const matching = allCards.filter(matchesTag);
    const totalPages = Math.max(1, Math.ceil(matching.length / PRODUCTS_PER_PAGE));
    currentPage = Math.min(currentPage, totalPages);
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
 
    allCards.forEach((card) => { card.hidden = !matchesTag(card); });
    matching.forEach((card, i) => { if (i < start || i >= end) card.hidden = true; });
 
    if (countLabel) countLabel.textContent = `${matching.length} ${matching.length === 1 ? "Producto" : "Productos"}`;
    renderPaginationControls(totalPages);
  }
 
  document.querySelectorAll(".tabs [data-tags]").forEach((button) => button.addEventListener("click", () => {
    activeTag = button.dataset.tags;
    currentPage = 1;
    document.querySelectorAll(".tabs [data-tags]").forEach((item) => item.classList.toggle("active", item === button));
    document.querySelectorAll(".filter-dropdown").forEach((dropdown) => {
      const toggle = dropdown.querySelector(".filter-dropdown-toggle");
      const label = toggle.querySelector("[data-filter-label]");
      const selected = dropdown.querySelector("[data-tags].active");
      toggle.classList.toggle("has-selection", !!selected);
      label.textContent = selected ? selected.textContent : "Más filtros";
    });
    renderGrid();
  }));
 
  renderGrid();
}
 
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