/* ==========================================================================
   M&M SHOPPING - HOME PAGE SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('home-products-grid');
  if (grid && typeof PRODUCTS_DATA !== 'undefined' && typeof createProductCardHTML === 'function') {
    const featuredProducts = PRODUCTS_DATA.slice(0, 8);
    grid.innerHTML = featuredProducts.map(createProductCardHTML).join('');
  }
});
