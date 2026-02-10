const products = [
    { id: 1, name: "Fresh Milk (1L)", price: 2.50, img: "milk.jpg" },
    { id: 2, name: "Whole Grain Bread", price: 1.80, img: "bread.jpg" },
    { id: 3, name: "Organic Eggs (12pk)", price: 4.20, img: "eggs.jpg" },
    { id: 4, name: "Green Apples (1kg)", price: 3.50, img: "apple.jpg" }
];

let cartCount = 0;

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="btn-add" onclick="addToCart()">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart() {
    cartCount++;
    document.getElementById('cart-counter').innerText = `Cart (${cartCount})`;
    alert("Item added to cart!");
}

window.onload = displayProducts;
