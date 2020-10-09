const name= 'Петро';
const product= 'Airpods 2'
const price= 3222;
const voranty= 222;
const voranty_time= 1;
const delivery= 99;
const count= 5;
const total= price * count + voranty * count + delivery;

console.log(`Вітаю, ${name}! Ваше замовлення:`);
console.log(`${product} за ціною -${price}грн у кількості ${count}`);
console.log(`Гарантія на ${voranty_time} рік вартістю - ${voranty}грн у кількості ${count}`);
console.log(`Вартість доставки - ${delivery}грн`);
console.log(`прийнято та буде оброблено протягом 24 години.`);
console.log(`Загальна вартість замовлення - ${total}грн`)

