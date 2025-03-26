let baseUrl = "http://localhost:3000/products"

document.addEventListener("DOMContentLoaded", () => {})

let productsBar = document.getElementById('products-bar')

function fetchProducts() {
    fetch(baseUrl)
    .then(res => res.json())
    .then(products => products.forEach(product => {
        
        let span = document.createElement('span');
        span.textContent = product.name;
        span.addEventListener('click', () => displayProducts(product));
        productsBar.appendChild('span');
    }))

    .catch(err => console.log(err)
    )
}

