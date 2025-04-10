let baseUrl = "https://phase-1-end-project-backend.vercel.app/Pieces";

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
    let product_catalog = document.getElementById('product-catalog');
    product_catalog.innerHTML = '';

    products.forEach(product => {
        let html = `<div class="single-product" data-id="${product.id}">
            <h5>${product.name}</h5>
            <img src="${product.image}" alt="${product.title}">
            <div>${product.category}</div>
            <div>$ ${product.price}</div>
            <div id="buttons">
                <button class="one update">Update</button>
                <button class="one delete" onclick="deleteProduct('${product.id}')">Delete</button>
            </div>
        </div>`;

        product_catalog.innerHTML += html;
    });
}

function addProduct() {
    const title = document.getElementById('name').value;
    const image = document.getElementById('image').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;

    const newProduct = {
        name,
        image,
        description,
        category,
        price
    };

    fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => {
        console.log("Product added:", data);
        fetchProducts();
    })
    .catch(err => console.log(err));
}

function deleteProduct(product_id) {
    console.log(`Deleting product with ID: ${product_id}`);
    fetch(`${baseUrl}/${product_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        console.log("Product deleted:", data);
        fetchProducts();
    })
    .catch(err => console.log("Delete error:", err));
}



