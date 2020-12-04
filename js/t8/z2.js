let total = 0;

let products = 0;

let buy = true;

while( buy ){
	const price = Number(prompt(`Введіть ціну вибраного товару`) );
	total = total+price;
	products++;
	buy = confirm(`Продовжии покупки?`);

}
const mod = total / products;
alert(`Ви прибдали ${products} товарів на загальну вартість - ${total} грн. Середня ціна - ${mod}`)
