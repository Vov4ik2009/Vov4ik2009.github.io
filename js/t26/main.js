const cards = document.getElementById('cards');

function drawCards(num){
    
    let cards_html = ``;

    for(i = 0; i < num; i++){
        cards_html +=
        `
        <div class="card">
                <div class="card-body">
                <p class="card-text">Card ${i+1}</p>
                </div>
        </div>
        `

    }
    cards.innerHTML = cards_html;

    addAnimation();
}

function addAnimation(){
    const cards = document.querySelectorAll('.card');

    cards.forEach( function(card){
        card.addEventListener('click', function(){
            this.classList.add('anim-card')
        })
    } )
}