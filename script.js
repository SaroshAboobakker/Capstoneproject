// PRODUCT DATABASE
const products = [
    { id: 1, name: "Reusable Water Bottle", price: 15, eco: "Reduces plastic waste", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=200&fit=crop" },
    { id: 2, name: "Bamboo Toothbrush", price: 5, eco: "Biodegradable material", image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=300&h=200&fit=crop" },
    { id: 3, name: "Reusable Shopping Bag", price: 10, eco: "Replaces plastic bags", image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=300&h=200&fit=crop" },
    { id: 4, name: "Solar Power Bank", price: 25, eco: "Uses renewable energy", image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=300&h=200&fit=crop" },
    { id: 5, name: "Metal Straw Set", price: 8, eco: "Reduces single-use plastic", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop" },
    { id: 6, name: "Eco Notebook", price: 12, eco: "Made from recycled paper", image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=300&h=200&fit=crop" },
    { id: 7, name: "Compost Bin", price: 30, eco: "Helps reduce food waste", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=200&fit=crop" },
    { id: 8, name: "LED Light Bulbs", price: 20, eco: "Energy efficient", image: "https://images.unsplash.com/photo-1550985616-10810253b84d?w=300&h=200&fit=crop" },
    { id: 9, name: "Reusable Food Wrap", price: 14, eco: "Alternative to plastic wrap", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=300&h=200&fit=crop" },
    { id: 10, name: "Eco Laundry Detergent", price: 18, eco: "Non-toxic ingredients", image: "https://images.unsplash.com/photo-1610557892470-55d9383f5700?w=300&h=200&fit=crop" }
];

// DISPLAY PRODUCTS
function displayProducts(productArray) {
    const list = document.getElementById("product-list");
    list.innerHTML = "";
    productArray.forEach(product => {
        list.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}" style="width:100%; height:150px; object-fit:cover; border-radius:8px;">
                <h3>${product.name}</h3>
                <p><strong>$${product.price}</strong></p>
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
    if (!cartDiv) return;
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
