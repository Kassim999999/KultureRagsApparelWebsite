let baseUrl = "http://localhost:3000/products"

document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
})

let productsBar = document.getElementById('products-bar')

function fetchProducts() {
    fetch(baseUrl)
    .then(res => res.json())
    .then(products => products.forEach(product => {
        
        let span = document.createElement('span');
        span.textContent = product.name;
        span.addEventListener('click', () => displayProducts(product));
        productsBar.appendChild(span);
    }))

    .catch(err => console.log(err)
    )
}

function displayProducts(product) {
    const productsInfo = document.getElementById('products-info')
    document.querySelector('#name').textContent = product.name;
    document.querySelector('#image').src = `images/${product.image}`;
    document.querySelector('#image').alt = product.name;
    document.querySelector('#price').textContent = product.price;
}
