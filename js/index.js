let baseUrl = "http://localhost:3000/products"

function displayProducts(products) {
    
    let product_catalog = document.getElementById('product-catalog')

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
