/* ==========================================================================
   M&M SHOPPING - AUTHENTICATION & USER SESSION SYSTEM
   ========================================================================== */

const USERS_STORAGE_KEY = 'mm_shopping_users';
const CURRENT_USER_KEY = 'mm_shopping_current_user';

class AuthManager {
  constructor() {
    this.currentUser = this.loadCurrentUser();
    this.initHeaderUserWidget();
  }

  getUsers() {
    try {
      const users = localStorage.getItem(USERS_STORAGE_KEY);
      return users ? JSON.parse(users) : [
        { name: "Maiada Muhammed", email: "maiada@example.com", password: "password123" }
      ];
    } catch (e) {
      return [];
    }
  }

  saveUsers(users) {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  }

  loadCurrentUser() {
    try {
      const user = localStorage.getItem(CURRENT_USER_KEY);
      return user ? JSON.parse(user) : null;
    } catch (e) {
      return null;
    }
  }

  register(name, email, password) {
    const users = this.getUsers();
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error("Account with this email already exists!");
    }

    const newUser = { name, email, password, createdAt: new Date().toISOString() };
    users.push(newUser);
    this.saveUsers(users);
    
    // Auto-login user
    this.setCurrentUser(newUser);
    return newUser;
  }

  login(email, password) {
    const users = this.getUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!user) {
      throw new Error("Invalid email or password!");
    }
    this.setCurrentUser(user);
    return user;
  }

  logout() {
    localStorage.removeItem(CURRENT_USER_KEY);
    this.currentUser = null;
    this.initHeaderUserWidget();
    if (window.showToast) {
      window.showToast("Logged out successfully");
    }
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  setCurrentUser(user) {
    this.currentUser = { name: user.name, email: user.email };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(this.currentUser));
    this.initHeaderUserWidget();
  }

  initHeaderUserWidget() {
    document.addEventListener('DOMContentLoaded', () => {
      const linksContainer = document.querySelector('.nav-links, .links');
      if (!linksContainer) return;

      const authLinks = linksContainer.querySelectorAll('.sign-up, .register');

      if (this.currentUser) {
        // Hide regular signup/register links
        authLinks.forEach(el => el.style.display = 'none');

        // Remove existing profile pill if present
        const existingPill = linksContainer.querySelector('.user-profile-btn');
        if (existingPill) existingPill.remove();

        // Add user profile pill
        const profileWidget = document.createElement('div');
        profileWidget.className = 'user-profile-btn';
        profileWidget.innerHTML = `
          <span class="material-symbols-outlined">person</span>
          <span>Hi, ${this.currentUser.name.split(' ')[0]}</span>
          <button class="logout-btn" id="header-logout-btn" title="Logout">
            <span class="material-symbols-outlined">logout</span>
          </button>
        `;
        linksContainer.appendChild(profileWidget);

        document.getElementById('header-logout-btn')?.addEventListener('click', (e) => {
          e.preventDefault();
          this.logout();
        });
      }
    });
  }
}

window.authManager = new AuthManager();
