let cards = JSON.parse( localStorage.getItem('cards') );

if(cards === null){ cards = [] }

function drawCards(){
	let cards = JSON.parse( localStorage.getItem('cards') );

	if(cards === null){ cards = [] }
	
	let cards_html = ``
	
	cards.map(function(card){
		cards_html +=
		`
		<div class="card">
			<div class="header">
				
			</div>
			
			<div class="card_image">
				<img src=${card.photo} alt="">
			</div>
			
			<div class="card_info">
				<div class="name">
					${card.name}
				</div>
				
				<div class="reviews">
					${card.reviews} відгуків
				</div>
				
				<div class="price">
					${card.price}&#8372;
				</div>
			</div>
		</div>
		`
	})
	
	document.getElementById('all_products').innerHTML = cards_html;
}

drawCards();

function saveCard(){
	const name    = document.getElementById('name').value;
	const photo   = document.getElementById('photo').value;
	const reviews = document.getElementById('reviews').value;
	const price   = document.getElementById('price').value;
	
	const card = {
		name: name,
		photo: photo,
		reviews: reviews,
		price: price
	}
	
	
	if(name.length > 0 && photo.length > 0 && reviews.length > 0 && price.length > 0){
		cards.push(card);
		localStorage.setItem("cards", JSON.stringify(cards))

		drawCards();
	}
}
function saveCard(){
	const name    = document.getElementById('name').value;
	const photo   = document.getElementById('photo').value;
	const reviews = document.getElementById('reviews').value;
	const price   = document.getElementById('price').value;
	
	const card = {
		name: name,
		photo: photo,
		reviews: reviews,
		price: price
	}
	
	
	if(name.length > 0 && photo.length > 0 && reviews.length > 0 && price.length > 0){
		cards.push(card);
		localStorage.setItem("cards", JSON.stringify(cards))

		drawCards();
	}
}
function saveCard(){
	const name 		= document.getElementById('name').value;
	const photo 	= document.getElementById('photo').value;
	const reviews 	= document.getElementById('reviews').value;
	const price 	= document.getElementById('price').value;
	
	const card = {
		name:name,
		photo:photo,
		reviews:reviews,
		price:price
	}
	
	if(name.length > 0 && photo.length > 0 && reviews.length > 0 && price.length > 0){
		cards.push(card);
		localStorage.setItem('cards', JSON.stringify(cards));
		drawCards();
	}
	
}