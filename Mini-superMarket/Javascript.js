/* ===============================
   PRODUCT DATA
================================ */
const products = {
    "Schuhe": { price: 30 },
    "T-shirt": { price: 60 },
    "Smartwatch": { price: 10 },
    "Headphones": { price: 51 },
    "Handy": { price: 120 },
    "Car": { price: 310 },
    "Tv": { price: 0 }
};

let cart = {};
let cartVisible = true;

/* ===============================
   SEARCH FUNCTION
================================ */
function Search() {
    const searchValue = document
        .getElementById("search-box")
        .value
        .toLowerCase();

    Object.keys(products).forEach(name => {
        const el = document.getElementById(name);
        if (name.toLowerCase().includes(searchValue)) {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    });
}

/* ===============================
   ADD TO CART
================================ */
function AddtoCart() {
    const productDiv = event.target.closest(".pro");
    const productName = productDiv.id;

    if (!cart[productName]) {
        cart[productName] = 1;

        // show product in cart
        document.getElementById("Add_" + productName).style.display = "flex";
    } else {
        cart[productName]++;
    }

    updateTotal();
}

/* ===============================
   UPDATE TOTAL
================================ */
function updateTotal() {
    let total = 0;

    Object.keys(cart).forEach(name => {
        total += products[name].price * cart[name];
    });

    if (total > 0) {
        document.querySelector("footer").style.display = "flex";
        document.getElementById("Checkout").style.display = "block";
    }

    document.getElementById("total").innerText = total + "$";
}

/* ===============================
   TOGGLE CART VIEW
================================ */
function addCart() {
    const cartDiv = document.getElementById("show-Add-cart");
    cartVisible = !cartVisible;
    cartDiv.style.display = cartVisible ? "block" : "none";
}

/* ===============================
   CHECKOUT
================================ */
function Checkout() {
    if (Object.keys(cart).length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Checkout successful!\nTotal: " + document.getElementById("total").innerText);

    // Reset cart
    Object.keys(cart).forEach(name => {
        document.getElementById("Add_" + name).style.display = "none";
    });

    cart = {};
    document.querySelector("footer").style.display = "none";
    document.getElementById("Checkout").style.display = "none";
    document.getElementById("total").innerText = "0$";
}