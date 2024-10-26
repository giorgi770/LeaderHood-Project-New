const products = [
    { id: 1, name: "Waffle with Berries", price: 6.5, image: "./assets/images/image-waffle-thumbnail.jpg" },
    { id: 2, name: "Vanilla Bean Crème Brûlée", price: 7.0, image: "./assets/images/image-creme-brulee-thumbnail.jpg" },
    { id: 3, name: "Macaron Mix of Five", price: 8.0, image: "./assets/images/image-macaron-thumbnail.jpg" },
    { id: 4, name: "Classic Tiramisu", price: 5.5, image: "./assets/images/image-tiramisu-thumbnail.jpg" },
    { id: 5, name: "Pistachio Baklava", price: 4.0, image: "./assets/images/image-baklava-thumbnail.jpg" },
    { id: 6, name: "Lemon Meringue Pie", price: 5.0, image: "./assets/images/image-meringue-thumbnail.jpg" },
    { id: 7, name: "Red Velvet Cake", price: 7.7, image: "./assets/images/image-cake-thumbnail.jpg" },
    { id: 8, name: "Salted Caramel Brownie", price: 5.7, image: "./assets/images/image-brownie-thumbnail.jpg" },
];

let cart = [];
const cartCountElement = document.getElementById('cart-count');
const cartItemsElement = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const cartModal = document.getElementById('cart-modal');

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartDisplay();
        alert(`${product.name} added to cart!`);
    } else {
        alert("Product not found!");
    }
}

function updateCartDisplay() {
    cartCountElement.textContent = cart.length;
    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach(product => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="cart-item-image">
            ${product.name} - $${product.price.toFixed(2)}
        `;
        cartItemsElement.appendChild(cartItem);
        total += product.price;
    });

    totalPriceElement.textContent = total.toFixed(2);
}

function toggleCart() {
    cartModal.classList.toggle('hidden');
}

// Image enlargement function
function enlargeImage(imgElement) {
    const enlargedImage = document.createElement('div');
    enlargedImage.className = 'enlarged-image';
    enlargedImage.innerHTML = `
        <span class="close" onclick="this.parentElement.remove()">×</span>
        <img src="${imgElement.src}" alt="${imgElement.alt}">
    `;
    document.body.appendChild(enlargedImage);
}

function confirmOrder(event) {
    event.preventDefault();
    const orderStatus = document.getElementById('order-status');
    orderStatus.innerHTML = '<span class="checkmark">✔️</span> Order Confirmed!';
    orderStatus.classList.remove('hidden');

    setTimeout(() => {
        orderStatus.classList.add('hidden');
    }, 3000);
}

function startNewOrder() {
    cart = [];
    updateCartDisplay();
    document.getElementById('order-status').classList.add('hidden');
}