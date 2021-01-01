const product = {
	action: true,
	name: "Клавіатура дротова Logitech",
	reviews: 204,
	price: 1399,
	photo: "images/z1-2.jpg"
};

const product_2 = {
	action: false,
	name: "Клавіатура Cougar Vantar",
	reviews: 6,
	price: 1286,
	photo: "images/z2.jpg"
};

let points_1 = product.reviews * 0.5;

let points_2 = product_2.reviews * 0.5;

if( product.action) { points_1 += 100};
if( product_2.action) { points_2 += 100};

if( product.price > product_2.price ){
	const res = product.price - product_2.price;
	points_2 += res
}else{
	const res = product_2.price - product.price;
	points_1 += res
}

console.log(points_1, points_2)

const products = document.getElementById("products");

let action_1 = '';

if( product.action == true ) { action_1 = `<div class="action">Акція</div>` }
	
let action_2 = '';

if( product_2.action == true ) { action_2 = `<div class="action">Акція</div>` }

const card = 
 `<div>
	<div class="card">
		<div class="header">
			${action_1}
		</div>
		
		<div class="card_image">
			<img src=${product.photo} alt="">
		</div>
		
		<div class="card_info">
			<div class="name">
				${product.name}
			</div>
			
			<div class="reviews">
				${product.reviews} відгуки
			</div>
			
			<div class="price red">
				${product.price}&#8372;
			</div>
		</div>
	</div>
	<h2 align="center">${points_1} балів</h2>
</div>
`
const card_2 = 
`<div>
	
	<div class="card">
		<div class="header">
			${action_2}
		</div>
		
		<div class="card_image">
			<img src=${product_2.photo} alt="">
		</div>
		
		<div class="card_info">
			<div class="name">
				${product_2.name}
			</div>
			
			<div class="reviews">
				${product_2.reviews} відгуки
			</div>
			
			<div class="price">
				${product_2.price}&#8372;
			</div>
		</div>
	</div>
	<h2 align="center">${points_2} балів</h2>
</div>
`

products.innerHTML = card + card_2;
