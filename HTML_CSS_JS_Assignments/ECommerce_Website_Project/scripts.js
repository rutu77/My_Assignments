const products = [
    { id: 1, name: "Laptop A", category: "Laptop", price: 52499, rating: 5, image: "laptop.jpg" },
    { id: 2, name: "Phone A", category: "Phone", price: 9899, rating: 5, image: "phone.jpg" },
    { id: 3, name: "TV A", category: "TV", price: 40000, rating: 3, image: "TV.jpg" },
    { id: 4, name: "Laptop B", category: "Laptop", price: 47990, rating: 4, image: "laptop1.jpg" },
    { id: 5, name: "Phone B", category: "Phone", price: 8990, rating: 4, image: "phone1.jpg" },
    { id: 6, name: "Laptop C", category: "Laptop", price: 51399, rating: 5, image: "laptop2.jpg" },
    { id: 7, name: "Phone C", category: "Phone", price: 19599, rating: 2, image: "phone2.jpg" },
    { id: 8, name: "Fridge A", category: "Refrigerator", price: 42599, rating: 2, image: "fridge.jpg" },
    { id: 9, name: "TV B", category: "TV", price: 35000, rating: 2, image: "TV1.jpg" },
    { id: 10, name: "Printer A", category: "Printer", price: 13499, rating: 2, image: "printer.jpg" },
];

let cart = [];

const productGrid = document.getElementById("product-grid");

function displayProducts(productsToShow) {
    productGrid.innerHTML = "";
    productsToShow.forEach((product) => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: ₹${product.price}</p>
            <p>Rating: ${product.rating} Stars</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productGrid.appendChild(card);
    });

    document.querySelectorAll(".add-to-cart").forEach((btn) => {
        btn.addEventListener("click", () => {
            const productId = btn.dataset.id;
            addToCart(productId);
        });
    });
}

function addToCart(productId) {
    const product = products.find((p) => p.id == productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <p>${item.name} - ₹${item.price}</p>
            <button class="remove-from-cart" data-index="${index}">Remove</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.textContent = `₹${total}`;

    document.querySelectorAll(".remove-from-cart").forEach((btn) => {
        btn.addEventListener("click", () => {
            const index = btn.dataset.index;
            removeFromCart(index);
        });
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.getElementById("filter-category").addEventListener("change", filterProducts);
document.getElementById("filter-price").addEventListener("input", filterProducts);
document.getElementById("filter-rating").addEventListener("change", filterProducts);
document.getElementById("sort-options").addEventListener("change", filterProducts);

function filterProducts() {
    let filtered = products;

    const category = document.getElementById("filter-category").value;
    if (category !== "all") filtered = filtered.filter((p) => p.category === category);

    const price = document.getElementById("filter-price").value;
    filtered = filtered.filter((p) => p.price <= price);
    document.getElementById("price-value").textContent = `₹${price}`;

    const rating = document.getElementById("filter-rating").value;
    if (rating !== "all") filtered = filtered.filter((p) => p.rating >= rating);

    const sort = document.getElementById("sort-options").value;
    if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
    if (sort === "rating-desc") filtered.sort((a, b) => b.rating - a.rating);
    if (sort === "rating-asc") filtered.sort((a, b) => a.rating - b.rating);

    displayProducts(filtered);
}

displayProducts(products);
