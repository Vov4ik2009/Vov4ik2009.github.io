const all_orders = [
	{
		client_name: "Дмитро Іванов",
		client_phone: "+3809781240",
		order_name: "Iphone X",
		order_price: "520",
		order_status: true
	},
	{
		client_name: "Тетяня Микитенко",
		client_phone: "+3809646712",
		order_name: "Клавіатура",
		order_price: "60",
		order_status: false
	},
	{
		client_name: "Андірй Тарасенко",
		client_phone: "+3809641412",
		order_name: "Телефон Samsung",
		order_price: "360",
		order_status: true
	}
]

function addOrder() {
	let order = {};
	
	order.client_name = document.getElementById('client_name').value;	
    order.client_phone = document.getElementById('client_phone').value;
    order.order_name = document.getElementById('order_name').value; 
    order.order_price = document.getElementById('order_price').value;
    order.order_status = document.getElementById('order_status').checked;

    all_orders.push(order);
	
	drawOrders();
}

function drawOrders(){
	
	const orders_table = document.getElementById('orders_table');
	let table_html = ``;
	
	
	for( i = 0; i < all_orders.length; i++){
		let order_checked = ``;
		if( all_orders[i].order_status ){ order_checked = `checked`}
	
		table_html += 
		`
		<tr>
			<td>${i + 1}</td>
			<td>${all_orders[i].client_name}</td>
			<td>${all_orders[i].client_phone}</td>
			<td>${all_orders[i].order_name}</td>
			<td class="centered">${all_orders[i].order_price}</td>
			<td class="centered"><input type="checkbox" ${order_checked}></td>
			<td class="centered"><button class="del_btn" onclick='delOrder(${i})'>Видалити</button></td>
		</tr>
		`
	}
	orders_table.innerHTML = table_html;
}

function delOrder(x){
    all_orders.splice(x, 1);
	drawOrders();
}

drawOrders();