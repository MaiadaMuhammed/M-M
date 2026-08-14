# 🛍️ M&M Shopping | Luxury Beauty & Skincare E-Commerce Platform

A full-featured, responsive, dynamic E-Commerce web application built with a modern **Glassmorphism UI**, custom **Dark/Light Theme system**, **LocalStorage State Management**, **Dynamic Product Details Routing**, and **SEO & Performance Optimizations**.

Designed & Developed with ❤️ by **Maiada Muhammed**.

---

## ✨ Key Features

- 🎨 **Luxury Glassmorphism UI & Dual Theme System**:
  - Seamless toggle between **Dark Royalty (Deep Mahogany & Gold)** and **Light Warm Elegance**.
  - Theme state saved across browser sessions using `localStorage`.
- 🛒 **Dynamic Shopping Cart System**:
  - Real-time cart counter badge updated across all navigation bars.
  - Interactive quantity adjustments (+/-), item removal, and full cart clearing.
  - Automatic calculation of subtotal, tax (8%), and express shipping discounts.
  - Order checkout modal generating unique order confirmation IDs.
- 🔍 **Interactive Product Catalog**:
  - Instant live search by title, category, or description.
  - Category pill filters (*Skincare, Makeup, Fragrance, Body Care*).
  - Sorting options (Price: Low to High, High to Low, Top Rated).
- 📦 **Dynamic Product Detail Page**:
  - Dynamic routing (`product-details.html?id=X`).
  - High-resolution product showcase, quantity selector, and stock availability badge.
  - Related product recommendations based on product category.
- 🔐 **User Authentication System**:
  - Registration & Login forms with real-time validation.
  - User session state management displaying custom welcome badge ("Hi, User").
- ⚡ **SEO & Performance Optimization**:
  - OpenGraph & Twitter card social share tags.
  - `schema.org/BeautyStore` & `schema.org/Product` JSON-LD Structured Data.
  - Resource preconnecting for Google Fonts and lazy image loading (`loading="lazy"`).

---

## 🛠️ Built With

- **Core**: HTML5 (Semantic Structure), Vanilla JavaScript (ES6+ Modules)
- **Styling**: Modern CSS3 (CSS Custom Properties, Flexbox, CSS Grid, Glassmorphism, Keyframe Animations)
- **Icons & Typography**: Google Material Symbols Outlined, Google Fonts (*Outfit*, *Plus Jakarta Sans*)
- **Storage**: Browser `localStorage` API for state persistence

---

## 📁 Repository Structure

```text
E-COMMERCE PROJECT/
├── home.html                   # Homepage with Hero Slider & Featured Products
├── web pages/
│   ├── product.html            # Full Product Catalog with Search & Filtering
│   ├── product-details.html    # Dynamic Product Detail Page
│   ├── cart.html               # Interactive Shopping Cart & Checkout Modal
│   ├── signup.html             # User Login Page
│   └── register.html           # User Account Registration Page
├── css/
│   └── global.css              # Universal Luxury Design System & Theme Variables
├── js/
│   ├── products-data.js        # Products Dataset & Path Helper Utilities
│   ├── cart.js                 # Cart State Manager & Event Emitter
│   ├── auth.js                 # Authentication & Session Manager
│   ├── theme.js                # Dark/Light Theme System
│   └── main.js                 # Toast Notifications & UI Bindings
└── imgs/                       # High-Resolution AI Generated Luxury Assets
```

---

## 🚀 How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/mm-shopping-ecommerce.git
   ```
2. Open `home.html` in any web browser or launch with Live Server.

---

## 👩‍💻 Developer

**Maiada Muhammed**  
Front-End Web Developer  
- Portfolio:  
- LinkedIn: 

---
&copy; 2026 M&M Shopping. All rights reserved.
