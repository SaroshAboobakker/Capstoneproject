// PRODUCT DATABASE (your fake database)
const products = [
    { id: 1, name: "Reusable Water Bottle", price: 15, eco: "Reduces plastic waste" },
    { id: 2, name: "Bamboo Toothbrush", price: 5, eco: "Biodegradable material" },
    { id: 3, name: "Reusable Shopping Bag", price: 10, eco: "Replaces plastic bags" },
    { id: 4, name: "Solar Power Bank", price: 25, eco: "Uses renewable energy" },
    { id: 5, name: "Metal Straw Set", price: 8, eco: "Reduces single-use plastic" },
    { id: 6, name: "Eco Notebook", price: 12, eco: "Made from recycled paper" },
    { id: 7, name: "Compost Bin", price: 30, eco: "Helps reduce food waste" },
    { id: 8, name: "LED Light Bulbs", price: 20, eco: "Energy efficient" },
    { id: 9, name: "Reusable Food Wrap", price: 14, eco: "Alternative to plastic wrap" },
    { id: 10, name: "Eco Laundry Detergent", price: 18, eco: "Non-toxic ingredients" }
];

// DISPLAY PRODUCTS
function displayProducts(productArray) {
    const list = document.getElementById("product-list");
    list.innerHTML = "";

    productArray.forEach(product => {
        list.innerHTML += `
    <div class="product">
        <h3>${product.name}</h3>
        <p><strong>$${product.price}</strong></p>
        <p>${product.eco}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
`;
            <div class="product">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <p>${product.eco}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

// SEARCH FUNCTION
function searchProducts() {
    const searchValue = document.getElementById("search").value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchValue)
    );

    displayProducts(filtered);
}

// ADD TO CART
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = products.find(p => p.id === id);
    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
}

// LOAD PRODUCTS WHEN PAGE OPENS
displayProducts(products);

// DISPLAY CART ITEMS
function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartDiv = document.getElementById("cart-items");
    const totalDiv = document.getElementById("total");

    if (!cartDiv) return; // prevents errors on other pages

    cartDiv.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price;

        cartDiv.innerHTML += `
            <div class="product">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
            </div>
        `;
    });

    totalDiv.innerText = "Total: $" + total;
}

// CHECKOUT FUNCTION
function checkout() {
    alert("Payment Successful! Thank you for your purchase.");

    localStorage.removeItem("cart");
    location.reload();
}

// LOAD CART WHEN PAGE OPENS
displayCart();
