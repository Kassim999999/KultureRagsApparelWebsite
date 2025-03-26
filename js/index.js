let baseUrl = "http://localhost:3000/products"

document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();

    const productForm = document.getElementById('form');
    productForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addProduct();
    });
});


function fetchProducts() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(data => displayProducts(data))
        .catch(err => console.log(err));
}

function displayProducts(products) {
    
    let product_catalog = document.getElementById('product-catalog')
    product_catalog.innerHTML = '';

    products.forEach(product => {
        let html = `<div class="single-product">
            <h5>${product.title}</h5>
            <img src="${product.image}" alt="${product.title}">
            <p>${product.description}...</p>
            <div>${product.category}</div>
            <div>$ ${product.price}</div>
            <div id= "buttons">
            <button class= " one update">Update</button>
            <button id="delete-button" class= "one delete" onclick= "deleteProduct(${product.id})">Delete</button>
            </div>
        </div>`


        product_catalog.innerHTML += html
    });
}

function addProduct() {
    const title = document.getElementById('title').value;
    const image = document.getElementById('image').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;

    const newProduct = {
        title,
        image,
        description,
        category,
        price
    };

   
}






