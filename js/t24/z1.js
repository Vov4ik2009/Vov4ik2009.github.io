function findDevelopers(){
    let developers = []

    phones.map(function(phone){
     if(developers.indexOf(phone.developer) === -1){
         developers.push(phone.developer)
     }
       
     } )
   
     const datalistOptions = document.getElementById('datalistOptions');

     let options = ``;

     developers.map(function(dev){
         options += `<option value="${dev}"></option>`
     })

     datalistOptions.innerHTML = options;
    
}

findDevelopers()

function saveFilter(){
    const filter = {

        name:      document.getElementById('name').value,
        developer: document.getElementById('developer').value,
        max_price: document.getElementById('max_price').value,
        min_price: document.getElementById('min_price').value,
        order:     document.getElementById('order').value,
        
    }
    
  localStorage.setItem('filter', JSON.stringify(filter) )

  redrawCards(filter);

}

function redrawCards(filter){
    let new_phones = phones.slice();

    if(filter.name.length > 0){
        new_phones = new_phones.filter( function(phone){
            return phone.name.toLowerCase().includes(filter.name.toLowerCase())
        } );
    }

    if(filter.developer.length > 0){
        new_phones = new_phones.filter( function(phone){
            return phone.developer === filter.developer;
        } );
    }

    if(filter.min_price.length > 0){
        new_phones = new_phones.filter( function(phone){
            return phone.price >= filter.min_price;
        } );
    }

    if(filter.max_price.length > 0){
        new_phones = new_phones.filter( function(phone){
            return phone.price <= filter.max_price;
        } );
    }

    if(filter.order.length > 0 && filter.order === 'price'){
        new_phones = new_phones.sort ( function(a, b){
            return a.price - b.price
        } )

    }

    if(filter.order.length > 0 && filter.order === "reviews"){
        new_phones = new_phones.sort( function(a, b){
            return a.reviews - b.reviews
        } )
    }
    drawCards(new_phones);
}

function drawCards(phones) {
    const cards = document.getElementById('cards');
    let cards_html =``;

    phones.map( function (phone){
        let action = ``;
        if(phone.action){ action = `<div class="action">Акція</div>` }

        cards_html+= 
        `
            <div class="card">
                ${action}
                <img src="${phone.image}" class="card-img-top">
                <div class="card-body">
                    <h6 class="card-title">${phone.name}</h6>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Виробник:</b> <span>${phone.developer}</span></li>
                        <li class="list-group-item"><b>Відгуків:</b> <span>${phone.reviews}</span></li>
                        <li class="list-group-item"><b>Ціна:</b> <span>${phone.price}</span></li>
                    </ul>
                </div>
                <div class="card-body price">
                    <a href="#" class="card-link">В корзину</a>
                    <a href="#" class="card-link">Придбати</a>
                    </div>
            </div>
        `
    });

    cards.innerHTML = cards_html;

}

const filter = JSON.parse( localStorage.getItem('filter') );

if(filter){
    redrawCards(filter)
}else{
    drawCards(phones)
}
