/* ==========================================================================
   M&M SHOPPING - THEME SWITCHER SYSTEM (NAVBAR TOGGLE ONLY)
   ========================================================================== */

const THEME_STORAGE_KEY = 'mm_shopping_theme';

class ThemeManager {
  constructor() {
    this.currentTheme = this.loadTheme();
    this.applyTheme(this.currentTheme);
    this.init();
  }

  loadTheme() {
    return localStorage.getItem(THEME_STORAGE_KEY) || 'dark';
  }

  applyTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    if (document.body) {
      document.body.setAttribute('data-theme', theme);
    }
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    this.updateAllToggleButtons();
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
    if (window.showToast) {
      window.showToast(`Switched to ${newTheme === 'dark' ? 'Dark 🌙' : 'Light ☀️'} Mode`);
    }
  }

  updateAllToggleButtons() {
    const buttons = document.querySelectorAll('.theme-toggle-btn');
    buttons.forEach(btn => {
      const icon = btn.querySelector('.material-symbols-outlined');
      
      if (this.currentTheme === 'dark') {
        if (icon) icon.textContent = 'light_mode';
        btn.setAttribute('title', 'Switch to Light Mode ☀️');
      } else {
        if (icon) icon.textContent = 'dark_mode';
        btn.setAttribute('title', 'Switch to Dark Mode 🌙');
      }
    });
  }

  bindAllEvents() {
    // Click Handler for Navbar Theme Button
    document.addEventListener('click', (e) => {
      const toggleBtn = e.target.closest('.theme-toggle-btn');
      if (toggleBtn) {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }

  init() {
    const runSetup = () => {
      this.applyTheme(this.currentTheme);
      this.updateAllToggleButtons();
    };

    this.bindAllEvents();

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', runSetup);
    } else {
      runSetup();
    }
  }
}

window.themeManager = new ThemeManager();
