function drawProducts(){
    const cart = storageGet("cart") || [];
    let products_html = ``;
    cart.forEach( function(product, index){
        products_html +=
        `
        <tr>
            <th>${index + 1}</th>
            <td>
                <img src=" ${product.image}" height="100" />
            </td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
                <button 
                    type="button" 
                    class="btn btn-outline-danger btn-sm" 
                    onclick="deleteProduct(${index})"
                    >Видалити</button>
            </td>
        </tr>
        `
    } )
    document.getElementById("cart_table").innerHTML = products_html;
}

function deleteProduct(index){
    const cart = storageGet("cart") || [];

    cart.splice(index, 1);

    storageSave("cart", cart);

    drawProducts();
}




function makeOrder(){
    const order = {
        name:  document.getElementById("name").value,
        email: document.getElementById("email").value,
        cart: storageGet("cart")
    }
    
    if(storageGet("cart").length < 1) {
        displayMessage('message-error', 'Корзина', 'Корзина пуста', 4000); 
        return
    }

    if(order.name.length < 3) {
        displayMessage('message-error', 'Корзина', 'Немає імя', 4000); 
        return
    }

    if(order.email.length < 6) {
        displayMessage('message-error', 'Корзина', 'Немає email', 4000); 
        return
    }

    if(!order.email.includes('@') ) {
        displayMessage('message-error', 'Корзина', 'Немає @', 4000); 
        return
    }

    const orders = storageGet("orders") || [];
    orders.push(order);
    storageSave("orders", orders);
    
}

drawProducts();