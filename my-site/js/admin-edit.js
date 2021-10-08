let admin = JSON.parse( localStorage.getItem('admin') );
if(admin != true ){
    window.location = 'admin-edit.html';
}

function saveProduct(){
    const new_product = {
        name: document.getElementById('name').value,
        image: document.getElementById('image').value,
        price: document.getElementById('price').value,
        count: document.getElementById('count').value
    }

    if(new_product.name.length < 3){
        displayMessage('message-error', 'admin', 'Невірна назва', 5000);
        return
    }

    if(new_product.price <= 0){
        displayMessage('message-error', 'admin', 'Невірна ціна', 5000);
        return
    }

    if(new_product.count >= 5){
        displayMessage('message-error', 'admin', 'Невірна кількість', 5000);
        return
    }

    if(new_product.image.length < 7){
        displayMessage('message-error', 'admin', 'Невірна фотографія', 5000);
        return
    }
    let products = storageGet('products') || [];

    products.push(new_product)
    
    storageSave('products', products)

    displayMessage('message-success', 'admin', 'Додано', 5000);
}