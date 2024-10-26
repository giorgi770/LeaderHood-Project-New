// Scroll to top ფუნქცია
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ღილაკის ჩვენება ჩასქროლვის შემდეგ
window.onscroll = function() {
    let button = document.getElementById("backToTopBtn");
    if (document.documentElement.scrollTop > 300) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
};



// მოდალური ფანჯრის ელემენტები
var modal = document.getElementById("cartModal");
var btn = document.getElementById("cartBtn");
var span = document.getElementsByClassName("close")[0];

// ღილაკზე დაჭერა -> მოდალური ფანჯრის გახსნა
btn.onclick = function() {
    modal.style.display = "block";
}

// დახურვა ღილაკზე დაჭერით
span.onclick = function() {
    modal.style.display = "none";
}

// ფანჯრის ნებისმიერ ადგილას დაჭერა -> მოდალის დახურვა
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestions');
const products = [
    'Apple iPhone 16 Pro Max',
    'Apple iPhone 16 Pro',
    'Apple iPhone 16',
    'Xiaomi TV A 32 2025 EU',
    'Xiaomi TV A Pro 55 2025 EU',
    'Samsung TV QE55Q70CATXZT-2023',
    'Asus ROG Zephyrus G16 GU605MI-QR077 Eclipse Grey',
    'Asus ROG Strix G16 G614JI-N4083 6399',
    'Asus VivoBook Go 15 OLED E1504FA-L1285',
    'All product'
    // დაამატეთ მეტი პროდუქტების სახელები
];

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    suggestionsList.innerHTML = '';
    if (query) {
        const filtered = products.filter(product => product.toLowerCase().includes(query));
        filtered.forEach(product => {
            const li = document.createElement('li');
            li.textContent = product;
            li.onclick = () => {
                searchInput.value = product;
                suggestionsList.style.display = 'none';
                // აქ შეგიძლიათ დაამატოთ ფუნქცია ძებნის შესრულებისთვის
            };
            suggestionsList.appendChild(li);
        });
        suggestionsList.style.display = 'block';
    } else {
        suggestionsList.style.display = 'none';
    }
});

window.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
        suggestionsList.style.display = 'none';
    }
});