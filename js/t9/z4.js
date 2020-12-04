const arr_1 = ['Пн', 'Вт', 'Ср','Чт', 'Пт', 'Сб', 'Нд']

const arr_2 = [ 1200, 1140, 1400, 1150, 1400, 2500, 2950]

console.log(`День - Прибуток`)

let sum = 0;

let max = arr_2[0];

let min = arr_2[0];

let max_index = 0;

let min_index = 0;

for( i=0; i < arr_2.length; i++){
	
	sum = sum + arr_2[i];

	console.log(`  ${arr_1[i]} - ${arr_2[i]}`)
	
	if(arr_2[i]  > max){
		max = arr_2[i];
        max_index = i;		
	}
	
	if(arr_2[i]  < min){
		min = arr_2[i];
        min_index = i;	
	}
	
}

console.log(`Заг. сума за тижлень - ${sum}`);
console.log(`Найбільше зароблено у - ${arr_1[max_index]}`);
console.log(`Найменше зароблено у - ${arr_1[min_index]}`);