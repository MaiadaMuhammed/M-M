/* ==========================================================================
   M&M SHOPPING - CART MANAGEMENT SYSTEM
   ========================================================================== */

const CART_STORAGE_KEY = 'mm_shopping_cart_items';

class CartManager {
  constructor() {
    this.items = this.loadCart();
    this.initListeners();
    this.updateCartBadge();
  }

  loadCart() {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      return data ? JSON.parse(data) : [
        // Default initial items if cart is empty for great initial preview
        { id: 1, quantity: 2 },
        { id: 3, quantity: 1 }
      ];
    } catch (e) {
      console.error('Error loading cart', e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
      this.updateCartBadge();
      window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { items: this.items } }));
    } catch (e) {
      console.error('Error saving cart', e);
    }
  }

  addItem(productId, quantity = 1) {
    const existingIndex = this.items.findIndex(item => item.id === Number(productId));
    if (existingIndex > -1) {
      this.items[existingIndex].quantity += quantity;
    } else {
      this.items.push({ id: Number(productId), quantity });
    }
    this.saveCart();

    // Trigger toast notification if available
    if (window.showToast) {
      const product = PRODUCTS_DATA.find(p => p.id === Number(productId));
      const title = product ? product.title : 'Product';
      window.showToast(`Added "${title}" to your shopping cart! 🛒`);
    }
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== Number(productId));
    this.saveCart();
  }

  updateQuantity(productId, newQty) {
    if (newQty <= 0) {
      this.removeItem(productId);
      return;
    }
    const item = this.items.find(item => item.id === Number(productId));
    if (item) {
      item.quantity = Number(newQty);
      this.saveCart();
    }
  }

  clearCart() {
    this.items = [];
    this.saveCart();
  }

  getTotalCount() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getCartDetails() {
    return this.items.map(item => {
      const product = PRODUCTS_DATA.find(p => p.id === item.id);
      return {
        ...product,
        quantity: item.quantity,
        totalPrice: product ? (product.price * item.quantity).toFixed(2) : 0
      };
    }).filter(item => item.id); // filter valid products
  }

  calculateSubtotal() {
    return this.getCartDetails().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  updateCartBadge() {
    const badges = document.querySelectorAll('.cart-badge, .product-number');
    const totalCount = this.getTotalCount();
    badges.forEach(badge => {
      badge.textContent = totalCount;
      badge.classList.add('bounce');
      setTimeout(() => badge.classList.remove('bounce'), 300);
    });
  }

  initListeners() {
    window.addEventListener('storage', (e) => {
      if (e.key === CART_STORAGE_KEY) {
        this.items = this.loadCart();
        this.updateCartBadge();
      }
    });
  }
}

// Global Instance
window.cartManager = new CartManager();
