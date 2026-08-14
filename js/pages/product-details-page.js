/* ==========================================================================
   M&M SHOPPING - PRODUCT DETAILS PAGE SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('details-wrapper');
  const relatedGrid = document.getElementById('related-products-grid');

  // Get Product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  let productId = Number(urlParams.get('id')) || 1;

  const product = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];

  let selectedQty = 1;

  if (wrapper && product) {
    const imagePath = getCorrectImagePath(product.image);

    wrapper.innerHTML = `
      <div class="product-main-img-wrapper">
        <img class="product-main-img" src="${imagePath}" alt="${product.title}" loading="lazy" decoding="async" />
      </div>

      <div class="details-meta">
        <span class="details-category">${product.category}</span>
        <h1 class="details-title">${product.title}</h1>

        <div class="details-rating">
          <span class="material-symbols-outlined star-filled">star</span>
          <strong>${product.rating}</strong>
          <span style="color:var(--text-secondary); font-weight:500;">(${product.reviewsCount} customer reviews)</span>
        </div>

        <div class="details-price-row">
          <span class="details-price">$${product.price.toFixed(2)}</span>
          ${product.oldPrice ? `<span class="details-old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
        </div>

        <div class="stock-badge">
          <span class="material-symbols-outlined" style="font-size:1.1rem;">check_circle</span> In Stock (${product.stock} units available)
        </div>

        <p class="details-description">${product.description}</p>

        <div class="qty-selector">
          <span style="font-weight:700; color:var(--text-primary);">Quantity:</span>
          <button class="qty-btn" id="qty-minus" aria-label="Decrease quantity">-</button>
          <span class="qty-number" id="qty-val">1</span>
          <button class="qty-btn" id="qty-plus" aria-label="Increase quantity">+</button>
        </div>

        <button class="btn-primary-gold" id="details-add-btn" style="padding:1rem 2rem; font-size:1.1rem; width:fit-content; margin-top:1rem;">
          <span class="material-symbols-outlined">shopping_cart</span> Add To Cart
        </button>
      </div>
    `;

    // Quantity Select Logic
    const minusBtn = document.getElementById('qty-minus');
    const plusBtn = document.getElementById('qty-plus');
    const valSpan = document.getElementById('qty-val');
    const addBtn = document.getElementById('details-add-btn');

    if (minusBtn && plusBtn && valSpan) {
      minusBtn.addEventListener('click', () => {
        if (selectedQty > 1) {
          selectedQty--;
          valSpan.textContent = selectedQty;
        }
      });

      plusBtn.addEventListener('click', () => {
        if (selectedQty < product.stock) {
          selectedQty++;
          valSpan.textContent = selectedQty;
        }
      });
    }

    if (addBtn) {
      addBtn.addEventListener('click', () => {
        if (window.cartManager) {
          window.cartManager.addItem(product.id, selectedQty);
        }
      });
    }
  }

  // Render Related Products
  if (relatedGrid && typeof PRODUCTS_DATA !== 'undefined' && typeof createProductCardHTML === 'function') {
    const related = PRODUCTS_DATA.filter(p => p.id !== product.id).slice(0, 3);
    relatedGrid.innerHTML = related.map(createProductCardHTML).join('');
  }
});
