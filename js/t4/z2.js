const number = prompt('Введіть число');

if( number > 0 && number % 2==0 ){
	alert(`Введене число є додатнім та парним.`)
}else if( number > 0 && number % 2>0 ){
	alert(`Введене число є додатнім та не парним.`)
}else if( number < 0 && number % 2==0 ){
	alert(`Введене число є від'ємним та парним`)
}else if( number < 0 && number % 2<0 ){
	alert(`Введене число є від'ємним та не парним`)
}else if( number == 0 ){
	alert(`Введене число не є ні додатнім ні від'ємни.`)
}else{
	alert(`Невірно введено число.`)
}

