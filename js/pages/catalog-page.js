/* ==========================================================================
   M&M SHOPPING - CATALOG PAGE SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  let currentCategory = 'all';
  let currentSearch = '';
  let currentSort = 'featured';

  const grid = document.getElementById('catalog-products-grid');
  const searchInput = document.getElementById('search-input');
  const categoryBtns = document.querySelectorAll('.category-btn');
  const sortSelect = document.getElementById('sort-select');

  function filterAndRenderProducts() {
    if (!grid || typeof PRODUCTS_DATA === 'undefined') return;

    let filtered = PRODUCTS_DATA.filter(p => {
      const matchCat = currentCategory === 'all' || p.category.toLowerCase() === currentCategory.toLowerCase();
      const matchSearch = p.title.toLowerCase().includes(currentSearch.toLowerCase()) || 
                          p.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
                          p.category.toLowerCase().includes(currentSearch.toLowerCase());
      return matchCat && matchSearch;
    });

    // Apply Sorting
    if (currentSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="no-results">
          <span class="material-symbols-outlined">search_off</span>
          <h3>No products found</h3>
          <p>Try adjusting your search terms or filter selections.</p>
        </div>
      `;
    } else {
      grid.innerHTML = filtered.map(createProductCardHTML).join('');
    }
  }

  // Event Listeners for Filters
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-cat');
      filterAndRenderProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      filterAndRenderProducts();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      filterAndRenderProducts();
    });
  }

  // Initial Render
  filterAndRenderProducts();
});
