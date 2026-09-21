async function loadProducts() {

    const response = await fetch("/api/products");

    const products = await response.json();

    const productsContainer = document.getElementById("products");

    productsContainer.innerHTML = "";

    products.forEach(product => {

        const productDiv = document.createElement("div");

        productDiv.className = "product";

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>

            <button onclick="addToCart('${product.name}', ${product.price})">
                Add to Cart
            </button>
        `;

        productsContainer.appendChild(productDiv);
    });
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, price) {

    const product = {
        name: productName,
        price: price
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${productName} added to cart!`);

    console.log("Current Cart:", cart);
}

function displayCart() {

    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price;

        const item = document.createElement("div");

        item.innerHTML = `
            <p>
                ${product.name} - ₹${product.price}
                <button onclick="removeFromCart(${index})">
                    Remove
                </button>
            </p>
        `;

        cartItems.appendChild(item);
    });

    cartTotal.textContent = `Total: ₹${total}`;
}

function removeFromCart(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Order placed successfully!");

    cart = [];

    localStorage.removeItem("cart");

    displayCart();
}

displayCart();
loadProducts();