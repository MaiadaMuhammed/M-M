/* ==========================================================================
   M&M SHOPPING - CART PAGE SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const cartArea = document.getElementById('cart-content-area');

  function renderCartPage() {
    if (!cartArea || !window.cartManager) return;

    const cartDetails = window.cartManager.getCartDetails();

    if (cartDetails.length === 0) {
      cartArea.innerHTML = `
        <div class="empty-cart-box">
          <span class="material-symbols-outlined empty-cart-icon">remove_shopping_cart</span>
          <h2 style="font-size:1.8rem; font-weight:800; margin-bottom:0.5rem; color:var(--text-primary);">Your Cart is Currently Empty</h2>
          <p style="color:var(--text-secondary); margin-bottom:2rem;">Looks like you haven't added any luxury items to your cart yet.</p>
          <a href="./product.html" class="btn-primary-gold" style="padding:0.8rem 2rem;">
            <span class="material-symbols-outlined">storefront</span> Explore Catalog
          </a>
        </div>
      `;
      return;
    }

    const subtotal = window.cartManager.calculateSubtotal();
    const shipping = subtotal > 99 ? 0 : 15.00;
    const tax = subtotal * 0.08;
    const grandTotal = subtotal + shipping + tax;

    cartArea.innerHTML = `
      <div class="cart-layout">
        <div class="cart-items-wrapper">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; padding-bottom:1rem; border-bottom:1px solid var(--border-color);">
            <span style="font-weight:700; font-size:1.1rem; color:var(--text-primary);">Selected Items (${cartDetails.length})</span>
            <button class="btn-danger-outline" id="clear-cart-btn">
              <span class="material-symbols-outlined" style="font-size:1.1rem;">delete</span> Clear Cart
            </button>
          </div>

          ${cartDetails.map(item => `
            <div class="cart-item-row" data-id="${item.id}">
              <div class="cart-item-info">
                <a href="./product-details.html?id=${item.id}" title="View details for ${item.title}">
                  <img class="cart-item-img" src="${getCorrectImagePath(item.image)}" alt="${item.title}" loading="lazy" />
                </a>
                <div>
                  <h4 class="cart-item-title">
                    <a href="./product-details.html?id=${item.id}">${item.title}</a>
                  </h4>
                  <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                </div>
              </div>

              <div class="qty-controls">
                <button class="qty-action-btn dec-qty-btn" data-id="${item.id}" aria-label="Decrease quantity">-</button>
                <span style="font-weight:800; min-width:20px; text-align:center; color:var(--text-primary);">${item.quantity}</span>
                <button class="qty-action-btn inc-qty-btn" data-id="${item.id}" aria-label="Increase quantity">+</button>
              </div>

              <div class="cart-item-total">$${item.totalPrice}</div>

              <button class="qty-action-btn remove-item-btn" data-id="${item.id}" title="Remove item" style="color:var(--accent-rose);">
                <span class="material-symbols-outlined" style="font-size:1.2rem;">delete</span>
              </button>
            </div>
          `).join('')}
        </div>

        <!-- Order Summary Sidebar -->
        <div class="summary-card">
          <h3 class="summary-title">Order Summary</h3>

          <div class="summary-row">
            <span>Subtotal</span>
            <span style="color:var(--text-primary); font-weight:700;">$${subtotal.toFixed(2)}</span>
          </div>
          <div class="summary-row">
            <span>Estimated Shipping</span>
            <span>${shipping === 0 ? '<span style="color:#22c55e; font-weight:800;">FREE</span>' : '$' + shipping.toFixed(2)}</span>
          </div>
          <div class="summary-row">
            <span>Estimated Tax (8%)</span>
            <span style="color:var(--text-primary); font-weight:700;">$${tax.toFixed(2)}</span>
          </div>

          <div class="summary-row total-row">
            <span>Total</span>
            <span class="total-amount">$${grandTotal.toFixed(2)}</span>
          </div>

          <button class="btn-primary-gold" id="checkout-btn" style="width:100%; margin-top:1.5rem; padding:0.9rem; font-size:1.1rem;">
            <span class="material-symbols-outlined">lock</span> Complete Checkout
          </button>

          ${!window.authManager.currentUser ? `
            <div style="text-align:center; font-size:0.88rem; color:var(--text-secondary); margin-top:1rem;">
              <a href="./signup.html" style="color:var(--nav-active-color); font-weight:700; text-decoration:underline;">Sign in</a> for faster checkout
            </div>
          ` : ''}
        </div>
      </div>
    `;

    // Event Binds inside Cart Page
    document.getElementById('clear-cart-btn')?.addEventListener('click', () => {
      if (confirm("Are you sure you want to clear your shopping cart?")) {
        window.cartManager.clearCart();
        renderCartPage();
      }
    });

    document.querySelectorAll('.inc-qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const item = window.cartManager.items.find(i => i.id === Number(id));
        if (item) {
          window.cartManager.updateQuantity(id, item.quantity + 1);
          renderCartPage();
        }
      });
    });

    document.querySelectorAll('.dec-qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const item = window.cartManager.items.find(i => i.id === Number(id));
        if (item) {
          window.cartManager.updateQuantity(id, item.quantity - 1);
          renderCartPage();
        }
      });
    });

    document.querySelectorAll('.remove-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        window.cartManager.removeItem(id);
        renderCartPage();
      });
    });

    // Checkout Button Handler
    document.getElementById('checkout-btn')?.addEventListener('click', () => {
      const modal = document.getElementById('checkout-modal');
      const orderIdSpan = document.getElementById('order-id-span');
      if (modal) {
        if (orderIdSpan) orderIdSpan.textContent = `#MM-${Math.floor(100000 + Math.random() * 900000)}`;
        modal.style.display = 'flex';
        window.cartManager.clearCart();
      }
    });
  }

  document.getElementById('modal-close-btn')?.addEventListener('click', () => {
    window.location.href = './product.html';
  });

  window.addEventListener('cartUpdated', () => renderCartPage());

  renderCartPage();
});
