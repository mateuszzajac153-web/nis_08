// 1. Dane produktów (Lista Zakupów)
const products = [
    { id: 1, name: "Chleb", price: 4.50 },
    { id: 2, name: "Mleko", price: 3.20 },
    { id: 3, name: "Masło", price: 7.00 },
    { id: 4, name: "Ser żółty", price: 12.50 }
];

const productListContainer = document.getElementById('product-list');

// 2. Wyświetlanie produktów
function displayProducts() {
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Cena: ${product.price.toFixed(2)} zł</p>
            <button onclick="addToCart(${product.id})">Dodaj do koszyka</button>
        `;
        productListContainer.appendChild(card);
    });
}

// 3. Logika JS: Zapisywanie do localStorage
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert(`Dodano ${product.name} do koszyka!`);
};

// 4. Logika podstrony Zamówienie (Czyszczenie koszyka)
const orderForm = document.getElementById('order-form');

if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const userName = document.getElementById('user-name').value;
        
        alert(`Dziękujemy ${userName}! Zamówienie zostało przyjęte.`);
        
        // Czyszczenie koszyka w localStorage
        localStorage.removeItem('cart');
        
        // Reset formularza
        orderForm.reset();
    });
}

// Inicjalizacja
displayProducts();