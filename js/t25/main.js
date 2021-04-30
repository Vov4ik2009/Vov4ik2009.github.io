function drawCards() {
    const cards = document.getElementById('cards');

    let cards_html =``;

    phones.map( function(phone, index){
    
        cards_html +=
        `
        <div class="card">
            <img src="${phone.image}" class="card-img-top">
            <div class="card-body">
                <h6 class="card-title">${phone.name}</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Виробник:</b> <span>${phone.developer}</span></li>
                    <li class="list-group-item"><b>Відгуків:</b> <span>${phone.reviews}</span></li>
                    <li class="list-group-item"><b>Ціна:</b> <span>${phone.price}₴</span></li>
                </ul>
            </div>
            <div class="card-body price">
            <button class="btn btn-sm btn-primary" onclick="addToCart(${index})"> В корзину</button>
            <a href="#" class="card-link">Придбати</a>
                </div>
        </div>
        `
    } )
    cards.innerHTML = cards_html;
}

function addToCart(index){
    const phone = phones[index];

    const cart = getCartProducts();
    
    cart.push(phone)

    localStorage.setItem('cart', JSON.stringify(cart) )

    showProdsInCart()
}

function getCartProducts(){
    let cart = JSON.parse( localStorage.getItem('cart') );

    if( cart === null ){
        cart = [];
    }
    return cart
}

function showProdsInCart(){
    const prod_in_card = document.getElementById('prod_in_card');

    const prod_num = getCartProducts().length;

    prod_in_card.innerText = `( ${prod_num} )`
}

showProdsInCart()

drawCards();