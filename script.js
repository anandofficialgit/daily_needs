// Authentication state management
let currentUser = null;

// Check if user is already logged in
function checkAuthState() {
    const savedUser = localStorage.getItem('dailyNeedsUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showMainContent();
    } else {
        showLoginModal();
    }
}

// Social login handler
function handleSocialLogin(provider) {
    // Simulate social login (in real app, this would use OAuth APIs)
    const mockUsers = {
        google: { name: 'John Doe', email: 'john@gmail.com', provider: 'Google' },
        facebook: { name: 'Jane Smith', email: 'jane@facebook.com', provider: 'Facebook' },
        instagram: { name: 'Mike Johnson', email: 'mike@instagram.com', provider: 'Instagram' }
    };
    
    // Simulate login delay
    setTimeout(() => {
        currentUser = mockUsers[provider];
        localStorage.setItem('dailyNeedsUser', JSON.stringify(currentUser));
        showMainContent();
        alert(`Successfully logged in with ${provider}!`);
    }, 1000);
}

// Continue as guest
function continueAsGuest() {
    currentUser = { name: 'Guest', provider: 'Guest' };
    localStorage.setItem('dailyNeedsUser', JSON.stringify(currentUser));
    showMainContent();
}

// Logout function
function logout() {
    currentUser = null;
    localStorage.removeItem('dailyNeedsUser');
    showLoginModal();
}

// Show login modal
function showLoginModal() {
    document.getElementById('login-modal').style.display = 'flex';
    document.getElementById('main-content').style.display = 'none';
}

// Show main content
function showMainContent() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    
    // Update UI with user info
    if (currentUser && currentUser.name !== 'Guest') {
        document.getElementById('user-info').style.display = 'flex';
        document.getElementById('user-name').textContent = currentUser.name;
    } else {
        document.getElementById('user-info').style.display = 'none';
    }
    
    // Load products
    displayProducts();
}

const products = [
    { id: 1, name: "Fresh Milk (1L)", price: 2.50, img: "milk.jpg" },
    { id: 2, name: "Whole Grain Bread", price: 1.80, img: "wheatGrainBread.jpg" },
    { id: 3, name: "Organic Eggs (12pk)", price: 4.20, img: "OrganicBrownEggs12Pack.jpg" },
    { id: 4, name: "Green Apples (1kg)", price: 3.50, img: "apple.jpg" }
];

let cartCount = 0;

function displayProducts() {
    const productList = document.getElementById('product-list');
    if (productList) {
        productList.innerHTML = products.map(product => `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button class="btn-add" onclick="addToCart()">Add to Cart</button>
            </div>
        `).join('');
    }
}

function addToCart() {
    cartCount++;
    const cartCounter = document.getElementById('cart-counter');
    if (cartCounter) {
        cartCounter.innerText = `Cart (${cartCount})`;
    }
    alert("Item added to cart!");
}

// Initialize on page load
window.onload = checkAuthState;
