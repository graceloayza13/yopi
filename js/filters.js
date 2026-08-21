(() => {
    const groups = [...document.querySelectorAll("[data-filter-group]")];
    if (!groups.length) return;

    const grid = document.querySelector("[data-product-grid]");
    const countLabel = document.querySelector("[data-product-count]");
    const cards = grid ? [...grid.querySelectorAll(".product-card")] : [];

    const PRODUCTS_PER_PAGE = 12;
    const pagination = document.createElement("nav");
    pagination.className = "pagination";
    pagination.setAttribute("aria-label", "Paginación de productos");
    if (grid) grid.insertAdjacentElement("afterend", pagination);

    const whatsappNumber = window.LumaData?.WHATSAPP_NUMBER;
    const emptyState = document.createElement("div");
    emptyState.className = "product-grid-empty";
    emptyState.innerHTML = `
        <p>No encontramos piezas con esta combinación de filtros. Puede que tengamos algo similar disponible.</p>
        <a href="#" target="_blank" rel="noopener"${whatsappNumber ? "" : " hidden"}>Consultar disponibilidad por WhatsApp</a>
    `;
    if (grid) grid.insertAdjacentElement("afterend", emptyState);

    const activeTags = {};
    let activeSort = null;
    let currentPage = 1;

    function parsePrice(card) {
        const text = card.querySelector(".product-card-info p")?.textContent || "";
        const value = parseFloat(text.replace(/[^\d,.-]/g, "").replace(",", "."));
        return Number.isNaN(value) ? 0 : value;
    }

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
                applyFilters();
                grid.scrollIntoView({ behavior: "smooth", block: "start" });
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

    function applyFilters() {
        const tags = Object.values(activeTags).filter(Boolean);

        const visible = cards.filter((card) => {
            const cardTags = (card.dataset.tags || "").split(" ");
            return tags.every((tag) => cardTags.includes(tag));
        });

        if (activeSort && grid) {
            visible.sort((a, b) => {
                const diff = parsePrice(a) - parsePrice(b);
                return activeSort === "price-asc" ? diff : -diff;
            });
            visible.forEach((card) => grid.appendChild(card));
        }

        const totalPages = Math.max(1, Math.ceil(visible.length / PRODUCTS_PER_PAGE));
        currentPage = Math.min(currentPage, totalPages);
        const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
        const end = start + PRODUCTS_PER_PAGE;

        cards.forEach((card) => { card.hidden = !visible.includes(card); });
        visible.forEach((card, i) => { if (i < start || i >= end) card.hidden = true; });

        if (countLabel) {
            countLabel.textContent = `${visible.length} ${visible.length === 1 ? "Producto" : "Productos"}`;
        }

        renderPaginationControls(totalPages);
        updateEmptyState();
    }

    function updateEmptyState() {
        const hasResults = cards.some((card) => !card.hidden);
        emptyState.classList.toggle("is-visible", !hasResults);
        if (hasResults || !whatsappNumber) return;

        const activeLabels = groups
            .map((group) => group.querySelector("button.active"))
            .filter(Boolean)
            .map((button) => button.childNodes[0].textContent.trim());
        const filterContext = activeLabels.length ? ` en ${activeLabels.join(", ")}` : "";
        const message = `Hola, quisiera consultar disponibilidad de piezas${filterContext}.`;
        emptyState.querySelector("a").href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    }

    const mobileFilterToggle = document.querySelector(".filter-mobile-toggle");
    const tabsLeft = document.querySelector(".tabs-left");

    function updateMobileFilterState() {
        if (!mobileFilterToggle) return;
        mobileFilterToggle.classList.toggle("has-selection", Object.keys(activeTags).length > 0);
    }

    if (mobileFilterToggle && tabsLeft) {
        mobileFilterToggle.addEventListener("click", () => {
            const isOpen = tabsLeft.classList.toggle("open");
            mobileFilterToggle.setAttribute("aria-expanded", String(isOpen));
        });

        document.addEventListener("click", (event) => {
            if (!tabsLeft.contains(event.target)) {
                tabsLeft.classList.remove("open");
                mobileFilterToggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    groups.forEach((group) => {
        const key = group.dataset.filterGroup;
        const buttons = [...group.querySelectorAll("button[data-tags]")];

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const isActive = button.classList.contains("active");

                buttons.forEach((b) => b.classList.remove("active"));
                group.classList.remove("has-selection");
                delete activeTags[key];

                if (!isActive) {
                    button.classList.add("active");
                    group.classList.add("has-selection");
                    activeTags[key] = button.dataset.tags;
                }

                currentPage = 1;
                updateMobileFilterState();
                applyFilters();
            });
        });
    });

    const sortWrapper = document.querySelector(".filter-sort");
    const sortToggle = document.querySelector(".filter-sort-button");
    const sortMenu = document.querySelector(".filter-sort-menu");
    const sortLabel = document.querySelector("[data-filter-sort-label]");
    const defaultSortLabel = sortLabel ? sortLabel.textContent : "Ordenar";

    if (sortWrapper && sortToggle && sortMenu) {
        sortToggle.addEventListener("click", () => {
            const isOpen = sortWrapper.classList.toggle("open");
            sortToggle.setAttribute("aria-expanded", String(isOpen));
        });

        sortMenu.querySelectorAll("[data-sort]").forEach((option) => {
            option.addEventListener("click", () => {
                const isActive = option.classList.contains("active");

                sortMenu.querySelectorAll("[data-sort]").forEach((o) => o.classList.remove("active"));
                sortToggle.classList.remove("has-selection");
                activeSort = null;
                if (sortLabel) sortLabel.textContent = defaultSortLabel;

                if (!isActive) {
                    option.classList.add("active");
                    sortToggle.classList.add("has-selection");
                    activeSort = option.dataset.sort;
                    if (sortLabel) sortLabel.textContent = option.textContent.trim();
                }

                sortWrapper.classList.remove("open");
                sortToggle.setAttribute("aria-expanded", "false");
                currentPage = 1;
                applyFilters();
            });
        });

        document.addEventListener("click", (event) => {
            if (!sortWrapper.contains(event.target)) {
                sortWrapper.classList.remove("open");
                sortToggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    applyFilters();
})();