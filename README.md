# 🛒 Mini E-Commerce

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![FontAwesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge)

**A simple mini e-commerce shopping cart built with Vanilla JavaScript**

</div>

---

## 👤 About

**Mini E-Commerce** is a simple shopping cart web app built with pure HTML, CSS, and JavaScript — no frameworks or backend used. Users can search for products, add them to a cart, see the total price, and checkout. All product data is stored locally in a JavaScript object.

> This is a **practice project** to learn JavaScript DOM manipulation, object handling, dynamic price calculation, and cart logic.

---

## ✨ Features

- 🔍 **Search Products** — Filter products by name in real time
- 🛍 **Add to Cart** — Click "Add to card" button to add products
- 🛒 **Shopping Cart** — Shows all added products in a cart panel
- 💰 **Total Price** — Automatically calculates and updates total
- 🔄 **Toggle Cart** — Show/hide cart with the 🛒 button
- ✅ **Checkout** — Shows success alert with total, then resets cart
- ⚠️ **Empty Cart Check** — Alerts user if cart is empty at checkout

---

## 🛍 Products Available

| Product | Price |
|---|---|
| 👟 Schuhe (Shoes) | $30 |
| 👕 T-shirt | $60 |
| ⌚ Smartwatch | $10 |
| 🎧 Headphones | $51 |
| 📱 Handy (Phone) | $120 |
| 🚗 Car | $310 |
| 📺 TV | $0 |

---

## 🛠 Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure & product cards |
| CSS3 | Styling & layout |
| JavaScript (ES6+) | Cart logic, search, total calculation |
| Font Awesome 6.5.1 | Product icons (shoes, shirt, watch, etc.) |

> ⚠️ No React, no API, no backend — pure Vanilla JavaScript only.

---

## 📁 Project Structure

```
mini-ecommerce/
│
├── index.html          # Main HTML — products & cart layout
├── Style.css           # All styles
└── Javascript.js       # All logic: search, cart, total, checkout
```

---

## ⚙️ How JavaScript Works

```javascript
// All products with prices stored as object
const products = {
  "Schuhe": { price: 30 },
  "T-shirt": { price: 60 },
  "Smartwatch": { price: 10 },
  "Headphones": { price: 51 },
  "Handy": { price: 120 },
  "Car": { price: 310 },
  "Tv": { price: 0 }
};

let cart = {}; // tracks added items and quantities
```

**Flow:**
```
User searches product → matching products shown, others hidden
        ↓
User clicks "Add to card" → product appears in Shopping Cart
        ↓
Total price updates automatically
        ↓
User clicks Checkout → success alert shown → cart resets
```

---

## ⚙️ Installation

No installation needed! Pure HTML project.

**1. Clone the repository**

```bash
git clone https://github.com/afghanyarrami-bit/mini-ecommerce.git
```

**2. Go into the folder**

```bash
cd mini-ecommerce
```

**3. Open in browser**

Double-click `index.html` — or open with **Live Server** in VS Code.

---

## 🎮 How to Use

1. **Search** — Type a product name in the search box and click Search
2. **Add** — Click **"Add to card"** on any product
3. **Cart** — The product appears in the **Shopping Cart** on the right
4. **Total** — Price updates automatically at the bottom
5. **Checkout** — Click **Checkout** to complete — cart resets after

---
## 📸 Screenshot
<img width="2592" height="1068" alt="Image" src="https://github.com/user-attachments/assets/d51d4de7-fba9-4e9f-b788-1fc87e3e3b6c" />

<img width="733" height="1528" alt="Image" src="https://github.com/user-attachments/assets/a8060206-d9d3-4b38-b338-a77788e3092e" />

---
## 📬 Contact

**Ramin Afghanyar** — Junior Front-End Developer 🇨🇭 Switzerland

[![GitHub](https://img.shields.io/badge/GitHub-afghanyarrami--bit-black?style=flat&logo=github)](https://github.com/afghanyarrami-bit)
[![Email](https://img.shields.io/badge/Email-afghanyarrami@gmail.com-red?style=flat&logo=gmail)](mailto:afghanyarrami@gmail.com)

---

## 📄 License

MIT License © 2026 Ramin Afghanyar
