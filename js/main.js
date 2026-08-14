/* ==========================================================================
   M&M SHOPPING - MAIN INTERACTION & PAGE BINDINGS (PERFECTED DETAILS)
   ========================================================================== */

// Global Toast Notification Helper
window.showToast = function(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `
    <span class="material-symbols-outlined">check_circle</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 3200);
};

// Render Product Card Component HTML with Filled Star Rating & Sharp Contrast
function createProductCardHTML(product) {
  const imagePath = getCorrectImagePath(product.image);
  const detailLink = getCorrectPageLink('product-details') + `?id=${product.id}`;

  return `
    <article class="product-card">
      <div class="product-card-img-wrapper">
        <a href="${detailLink}" title="View details for ${product.title}">
          <img class="product-card-img" src="${imagePath}" alt="${product.title}" loading="lazy" decoding="async" />
        </a>
        ${product.tag ? `<span class="product-badge">${product.tag}</span>` : ''}
      </div>
      <div class="product-card-body">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">
          <a href="${detailLink}">${product.title}</a>
        </h3>
        <p class="product-description">${product.description}</p>
        <div class="product-rating">
          <span class="material-symbols-outlined star-filled" style="font-size:1.15rem;">star</span>
          <strong>${product.rating}</strong>
          <span style="color:var(--text-secondary); font-weight:500; font-size:0.85rem;">(${product.reviewsCount} reviews)</span>
        </div>
        <div class="product-card-footer">
          <div>
            <span class="product-price">$${product.price.toFixed(2)}</span>
            ${product.oldPrice ? `<span class="product-old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
          </div>
          <button class="btn-primary-gold add-to-cart-btn" data-id="${product.id}" title="Add ${product.title} to Cart">
            <span class="material-symbols-outlined" style="font-size:1.1rem;">shopping_cart</span>
            Add
          </button>
        </div>
      </div>
    </article>
  `;
}

// Bind Global Click Events (Add to cart buttons)
document.addEventListener('click', (e) => {
  const addBtn = e.target.closest('.add-to-cart-btn');
  if (addBtn) {
    e.preventDefault();
    const productId = addBtn.getAttribute('data-id');
    if (productId && window.cartManager) {
      window.cartManager.addItem(productId);
    }
  }
});

// Mobile Menu Toggle Binder
document.addEventListener('DOMContentLoaded', () => {
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});
