const allOrders = [

	{
		product: "Монітор Sony 8764d",
		price: 2430,
		type: 'монітор'
	},
	{
		product: "Клавіатура Rizen 1905b",
		price: 1350,
		type: 'клавіатура'
	},
	{
		product: "Монітор Samsung 187b",
		price: 3240,
		type: 'монітор'
	},
	{
		product: "Роутер від Asus 094g",
		price: 1080,
		type: 'роутер'
	},
	{
		product: "Клавіатура Rizen 2705c",
		price: 1215,
		type: 'клавіатура'
	},
	{
		product: "Клавіатура 1905b",
		price: 1242,
		type: 'клавіатура'
	},
	{
		product: "Монітор Sony 8764d",
		price: 2160,
		type: 'монітор'
	},
	{
		product: "Монітор Samsung 734s",
		price: 4860,
		type: 'монітор'
	},
	{
		product: "Роутер від Asus 091g",
		price: 810,
		type: 'роутер'
	},
	{
		product: "Клавіатура Rizen 1905b",
		price: 1566,
		type: 'клавіатура'
	},
	{
		product: "Монітор Samsung 187b",
		price: 2700,
		type: 'монітор'
	},
	{
		product: "Роутер від Asus 094g",
		price: 1242,
		type: 'роутер'
	},
];
let old_val = "UAH";

function showUsers( orders, money ){
	const orders_table = document.getElementById('orders_table')
	
	let table_html = ``;
	
	orders.map( function(val, index){
		table_html +=
	`
	<tr>
		<td>${index + 1}</td>
		<td>${val.product}</td>
		<td>${val.type}</td>
		<td>${val.price} ${money}</td>
	</tr>
	`
	} )
	
	orders_table.innerHTML = table_html;
	getSum( allOrders );
}

function changePricing(val){
	
	if( val == "USD" && old_val == "UAH" ){
		old_val = "USD";
		allOrders.map( function(order){ 
			order.price = order.price / 27;
		})
	}
	
	if( val == "UAH" && old_val == "USD" ){
		old_val = "UAH";
		allOrders.map( function(order){ 
			order.price = order.price * 27;
		})
	}
	
	showUsers( allOrders, old_val)
	getSum( allOrders, old_val );
}

function filterOrders(){
	let type_filter = document.getElementById('type_filter').value;
	
	let new_arr = allOrders.filter( function(val){
		
		return val.type == type_filter;
	})
	
   showUsers( new_arr, old_val )
   getSum( new_arr, old_val );
}

function getSum( orders, money ){
	
	let sum = orders.reduce( function(acc, val){return acc + val.price} , 0 )
		
	const result = document.getElementById('result');
	
	result.innerHTML = `Загалом витрачено - ${sum} ${money}`;
}

getSum( allOrders, old_val );

showUsers( allOrders, old_val );