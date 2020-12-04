const name = prompt('Як вас звати?');

let total = 0;

let corect= 0;

const answer_1 = prompt('2+2*2');

if(answer_1 == 6){
	total++
	corect += 1
}

const answer_2 = prompt('Як звати батька Франка?');

if(answer_2 == 'Яків' || answer_2 == 'Яків.'){
	total = total + 2
	corect += 1
}

const answer_3 = prompt('Як звати президента України?');

if(answer_3 == 'Володимир' || answer_3 == 'Володимир.' || answer_3 == 'Зеленьський' || answer_3 == 'Зе'){
	total = total + 2
	corect += 1
}

const answer_4 = prompt('Як звати мера київа?');

if(answer_4 == 'Віталій' || answer_4 == 'Віталій.' || answer_4 == 'Кличко'){
    total = total + 2
	corect += 1
}

const answer_5 = prompt('Скільки років Роналду?')

if(answer_5 == 34){
    total = total + 2
	corect += 1
}

const answer_6 = prompt('Скільки днів має вересень?')

if(answer_6 == 30){
    total = total + 2
	corect += 1
}

const answer_7 = prompt('Скільки днів має рік?')

if(answer_7 == 365){
    total = total + 2
	corect += 1
}

const answer_8 = prompt('Скільки місяців в році?')

if(answer_8 == 12){
    total = total + 2
	corect += 1
}

const answer_9 = confirm('5+5=10?')

if(answer_9 == true){
    total = total + 2
	corect += 1
}

const answer_10 = confirm('2*8=18?')

if(answer_10 == false){
    total = total + 2
	corect += 1
}

if(total < 8){
	alert(`Нажаль ${name}. Тест не складено. Ваш результат - ${total} балів`)
}else if(total >= 8 && total <= 14){
	alert(`Вітаю ${name}.Тест складено задовільно. Ваш результат - ${total} балів`)
}else if(total >= 15){
	alert(`Вітаю ${name}.Тест складено відмінно. Ваш результат - ${total} балів`)
}else{
	alert(`Помилка`)
}
alert(`Ви відповіти на ${corect} запитань.`)
alert(total)