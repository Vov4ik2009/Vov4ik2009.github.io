const width= 4;
const height= 5;
const squared_metres= width * height;
const metre_price= 400;
const total= squared_metres * metre_price;
const podatok= total/5 + total;
const fond= total/20 + podatok;
console.log(`Площа кімнати з шириною - ${width}м та довжиною ${height}м рівна - ${squared_metres} квадратних метрів. Загальна вартість ламінату для цієї кімнати за ціною ${metre_price}грн за метр квадратний рівна - ${total}грн. За рахуванням податків ще 20% це - ${podatok}грн. Ще 5% пенсійного фонду це - ${fond}грн.`)