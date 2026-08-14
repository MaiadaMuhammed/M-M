/* ==========================================================================
   M&M SHOPPING - AUTHENTICATION PAGES SCRIPT (LOGIN & REGISTER)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Login Form Handling (signup.html)
  const loginForm = document.getElementById('login-form');
  const loginAlertBox = document.getElementById('login-error-alert');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      try {
        if (window.authManager) {
          window.authManager.login(email, password);
          if (window.showToast) {
            window.showToast("Signed in successfully! Welcome back.");
          }
          setTimeout(() => {
            const isSubfolder = window.location.pathname.includes('/web pages/');
            window.location.href = isSubfolder ? '../home.html' : './home.html';
          }, 600);
        }
      } catch (err) {
        if (loginAlertBox) {
          loginAlertBox.textContent = err.message || "Login failed";
          loginAlertBox.style.display = 'block';
        }
      }
    });
  }

  // Registration Form Handling (register.html)
  const regForm = document.getElementById('register-form');
  const regAlertBox = document.getElementById('register-error-alert');

  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name').value;
      const email = document.getElementById('reg-email').value;
      const password = document.getElementById('reg-password').value;
      const confirmPass = document.getElementById('reg-confirm').value;

      if (password !== confirmPass) {
        if (regAlertBox) {
          regAlertBox.textContent = "Passwords do not match!";
          regAlertBox.style.display = 'block';
        }
        return;
      }

      try {
        if (window.authManager) {
          window.authManager.register(name, email, password);
          if (window.showToast) {
            window.showToast("Account created successfully! Welcome to M&M Club ✨");
          }
          setTimeout(() => {
            const isSubfolder = window.location.pathname.includes('/web pages/');
            window.location.href = isSubfolder ? '../home.html' : './home.html';
          }, 600);
        }
      } catch (err) {
        if (regAlertBox) {
          regAlertBox.textContent = err.message || "Registration failed";
          regAlertBox.style.display = 'block';
        }
      }
    });
  }
});
