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

fetch(baseUrl)
.then(res => res.json()
)
.then(data => displayProducts(data))
.catch(err => console.log(err)
)


let form = document.getElementById('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    let product_title = document.getElementById('title').value
    let product_image = document.getElementById('image').value
    let product_price = document.getElementById('price').value
    let product_description = document.getElementById('description').value
    let product_category = document.getElementById('category').value

    let product_object = {
        title: product_title,
        image: product_image,
        price: product_price,
        description: product_description,
        category: product_category
    }


    fetch(baseUrl, {
        method: "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(product_object)
    })
    .then(res => res.json())
    .then(data => console.log(data)
    )
    .catch(err => console.log(err)
    )
    
})

function deleteProduct(product_id) {
    fetch(`${base_url}/${product_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data)
    )
    .catch(err => console.log(err)
    )
}


