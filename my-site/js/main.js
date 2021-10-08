const products = storageGet('products');
const all_products = document.getElementById('all_products');

function drawProducts(){
    let products_html=``;

    products.forEach( function(product, index){
        products_html +=
        `
        <div class="card" style="width: 18rem; margin-top : 30px;">
                <img 
                    src="${product.image}" 
                    class="card-img-top" 
                    style="	width:auto;max-width:100%;max-height: 230px;margin: 10px auto 0;">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between ">
                        <b>Кількість</b>
                        <p>${product.count}</p>
                    </li>
                    <li class="list-group-item d-flex justify-content-between ">
                        <b>Ціна</b>
                        <p>${product.price}</p>
                    </li>
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-primary btn-sm" onclick="addToCart(${index}, this)">В корзинy</button>
                </div>
        </div>

        `
    } )

    all_products.innerHTML = products_html;
}
drawProducts();

function addToCart(index, btn){
    const product = products[index];
    btn.innerText = "Додано";
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-success");
    btn.disabled = true;

    const cart = storageGet('cart') || [];
    cart.push(product);
    storageSave('cart', cart)
    
    displayMessage('message-success', 'admin', 'Додано', 5000);
}

console.log(products);